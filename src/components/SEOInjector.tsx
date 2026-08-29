import React, { useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const SEOInjector: React.FC = () => {
  const { seoSettings, profile } = usePortfolio();

  useEffect(() => {
    if (!seoSettings) return;

    // 1. Update Title
    document.title = seoSettings.siteTitle || `${profile.name} — ${profile.title}`;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrName: 'name' | 'property', attrVal: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content || '');
    };

    // Standard Meta
    setMetaTag('name', 'description', seoSettings.metaDescription);
    setMetaTag('name', 'keywords', (seoSettings.keywords || []).join(', '));
    setMetaTag('name', 'author', seoSettings.author || profile.name);
    setMetaTag(
      'name',
      'robots',
      `${seoSettings.robotsIndex ? 'index' : 'noindex'}, ${seoSettings.robotsFollow ? 'follow' : 'nofollow'}`
    );

    if (seoSettings.googleVerificationId) {
      setMetaTag('name', 'google-site-verification', seoSettings.googleVerificationId);
    }
    if (seoSettings.bingVerificationId) {
      setMetaTag('name', 'msvalidate.01', seoSettings.bingVerificationId);
    }

    // OpenGraph
    setMetaTag('property', 'og:title', seoSettings.siteTitle);
    setMetaTag('property', 'og:description', seoSettings.metaDescription);
    setMetaTag('property', 'og:image', seoSettings.ogImage || profile.profileImageUrl);
    setMetaTag('property', 'og:type', seoSettings.ogType || 'website');
    setMetaTag('property', 'og:url', seoSettings.canonicalUrl || window.location.href);

    // Twitter Card
    setMetaTag('name', 'twitter:card', seoSettings.twitterCard || 'summary_large_image');
    setMetaTag('name', 'twitter:title', seoSettings.siteTitle);
    setMetaTag('name', 'twitter:description', seoSettings.metaDescription);
    setMetaTag('name', 'twitter:image', seoSettings.ogImage || profile.profileImageUrl);
    if (seoSettings.twitterHandle) {
      setMetaTag('name', 'twitter:site', seoSettings.twitterHandle);
      setMetaTag('name', 'twitter:creator', seoSettings.twitterHandle);
    }

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (seoSettings.canonicalUrl) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', seoSettings.canonicalUrl);
    }

    // JSON-LD Structured Data Schema
    let jsonLdScript = document.getElementById('seo-structured-data-jsonld') as HTMLScriptElement | null;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'seo-structured-data-jsonld';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }

    if (seoSettings.structuredDataJson) {
      jsonLdScript.textContent = seoSettings.structuredDataJson;
    } else {
      // Fallback JSON-LD
      const fallbackSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        jobTitle: profile.title,
        url: seoSettings.canonicalUrl || window.location.origin,
        sameAs: profile.socials.map((s) => s.url)
      };
      jsonLdScript.textContent = JSON.stringify(fallbackSchema, null, 2);
    }
  }, [seoSettings, profile]);

  return null;
};
