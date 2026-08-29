import {
  PersonalProfile,
  StatItem,
  SkillItem,
  ProjectItem,
  ExperienceItem,
  CertificationItem,
  WorkProcessStep,
  BlogPostItem,
  FAQItem,
  ResumeData,
  SEOSettings,
  ContactMessage
} from '../types';

export const personalProfile: PersonalProfile = {
  name: 'Shosunth Chakarborty',
  badge: 'SEO Expert',
  title: 'Web Developer & SEO Expert',
  heroHeading: 'Hi, I am Shosunth Chakarborty',
  heroIntro:
    'I am Shosunth Chakarborty, a passionate Web Developer and SEO Expert focused on building modern, high-performance websites and helping businesses grow their online visibility.',
  aboutHeading: 'Hi, I am Shosunth Chakarborty',
  aboutSubheading: 'Web Developer & SEO Expert',
  aboutIntro:
    'Driving Digital Growth & Building Modern Experiences through high-speed full-stack engineering and data-backed search engine optimization.',
  aboutStory: [
    'With a dual focus in modern web architecture and search engine algorithms, I bridge the gap between aesthetic front-end design, robust back-end systems, and high-converting organic search rankings.',
    'Over the years, I have engineered scalable web applications utilizing React, Next.js, and Node.js while architecting technical SEO foundations that drive sustainable organic traffic, zero-defect Core Web Vitals, and measurable business revenue.',
    'Whether constructing an enterprise web platform from scratch or elevating a business to #1 on search engine results pages, I deliver results centered on performance, security, clean code, and search visibility.'
  ],
  phoneNumber: '+880 1910-227780',
  phoneNumberFormatted: '+880 1910-227780',
  phoneTel: 'tel:+8801910227780',
  email: 'contact@shosunth.dev',
  location: 'Dhaka, Bangladesh',
  country: 'Bangladesh',
  availability: 'Available for freelance & full-time roles',
  // High quality professional developer/SEO portrait placeholder
  profileImageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  resumeFileName: 'Shosunth_Chakarborty_Resume.pdf',
  resumeLastUpdated: 'March 2026',
  socials: [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/shosunth-chakarborty',
      username: 'shosunth-chakarborty',
      iconName: 'Linkedin'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/shosunth',
      username: 'shosunth',
      iconName: 'Github'
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/shosunth.chakarborty',
      username: 'shosunth.chakarborty',
      iconName: 'Facebook'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/shosunth.dev',
      username: '@shosunth.dev',
      iconName: 'Instagram'
    }
  ]
};

export const statistics: StatItem[] = [
  {
    id: 'exp',
    label: 'Years of Experience',
    value: 5,
    suffix: '+',
    description: 'Specialized in Full-Stack Web Development & Technical SEO',
    iconName: 'Clock'
  },
  {
    id: 'projects',
    label: 'Completed Projects',
    value: 70,
    suffix: '+',
    description: 'Modern Web Apps, Portfolios, E-Commerce & SEO Campaigns',
    iconName: 'Briefcase'
  },
  {
    id: 'clients',
    label: 'Satisfied Clients',
    value: 45,
    suffix: '+',
    description: 'Global businesses, startups & digital brands',
    iconName: 'Users'
  },
  {
    id: 'growth',
    label: 'SEO Growth Rate',
    value: 280,
    suffix: '%',
    description: 'Average client organic traffic increase within 6 months',
    iconName: 'TrendingUp'
  }
];

export const skillsList: SkillItem[] = [
  // SEO Category
  {
    id: 'seo-general',
    name: 'SEO',
    category: 'SEO',
    level: 96,
    icon: 'Search',
    experienceYears: '5+ Years',
    description: 'Comprehensive organic search strategy, algorithm adaptation, and SERP visibility.',
    highlight: true
  },
  {
    id: 'tech-seo',
    name: 'Technical SEO',
    category: 'SEO',
    level: 98,
    icon: 'Cpu',
    experienceYears: '5 Years',
    description: 'Core Web Vitals, site crawlability, structured schema markup, rendering & indexing.',
    highlight: true
  },
  {
    id: 'local-seo',
    name: 'Local SEO',
    category: 'SEO',
    level: 92,
    icon: 'MapPin',
    experienceYears: '4 Years',
    description: 'Google Business Profile optimization, local citations, geo-targeted rank domination.',
    highlight: false
  },
  {
    id: 'keyword-research',
    name: 'Keyword Research',
    category: 'SEO',
    level: 95,
    icon: 'Target',
    experienceYears: '5 Years',
    description: 'High-intent search query mapping, competitor gap analysis, search volume clustering.',
    highlight: false
  },
  {
    id: 'on-page-seo',
    name: 'On-Page SEO',
    category: 'SEO',
    level: 95,
    icon: 'FileText',
    experienceYears: '5 Years',
    description: 'Semantic headings, content optimization, metadata craft, internal link graph.',
    highlight: true
  },
  {
    id: 'off-page-seo',
    name: 'Off-Page SEO',
    category: 'SEO',
    level: 88,
    icon: 'Share2',
    experienceYears: '4 Years',
    description: 'High-authority backlink outreach, brand mentions, digital PR & entity building.',
    highlight: false
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'Backend & CMS',
    level: 94,
    icon: 'Globe',
    experienceYears: '5 Years',
    description: 'Custom theme & plugin customization, WooCommerce, speed & SEO optimization.',
    highlight: false
  },
  // Development Skills
  {
    id: 'html',
    name: 'HTML',
    category: 'Frontend',
    level: 98,
    icon: 'Code',
    experienceYears: '5+ Years',
    description: 'Semantic HTML5, accessibility (WCAG), microdata & SEO-friendly markup structure.',
    highlight: false
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Frontend',
    level: 95,
    icon: 'Palette',
    experienceYears: '5+ Years',
    description: 'Modern CSS3, Tailwind CSS, responsive layouts, CSS Grid, animations & Flexbox.',
    highlight: false
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    level: 92,
    icon: 'Terminal',
    experienceYears: '5 Years',
    description: 'ES6+, asynchronous programming, DOM optimization, vanilla JS performance.',
    highlight: true
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    level: 94,
    icon: 'Layers',
    experienceYears: '4+ Years',
    description: 'Component architecture, custom hooks, state management, SPA optimization.',
    highlight: true
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    level: 93,
    icon: 'Zap',
    experienceYears: '3+ Years',
    description: 'Server-Side Rendering (SSR), Static Site Generation (SSG), App Router, dynamic SEO.',
    highlight: true
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend & CMS',
    level: 88,
    icon: 'Server',
    experienceYears: '4 Years',
    description: 'RESTful API architecture, Express backend services, middleware, authentication.',
    highlight: false
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Backend & CMS',
    level: 86,
    icon: 'Database',
    experienceYears: '3+ Years',
    description: 'NoSQL schema design, aggregation pipelines, indexed fast queries & Mongoose.',
    highlight: false
  }
];

export const projectsList: ProjectItem[] = [
  {
    id: 'apex-seo-analytics',
    number: '01',
    title: 'ApexRank — High-Performance SaaS & Technical SEO Engine',
    tagline: 'Achieved 420% Organic Traffic Growth and 99/100 Core Web Vitals Score',
    description:
      'A modern Next.js 14 web platform designed for SaaS lead generation and real-time rank tracking. Engineered with server-side rendered SEO markup, dynamic programmatic pages, and sub-second load times.',
    longDescription:
      'ApexRank was architected to solve poor crawl efficiency and low search rankings for a B2B SaaS startup. By completely rewriting the frontend in Next.js, implementing JSON-LD breadcrumb and software schema, and pruning 3,000+ low-value URLs, organic customer acquisitions skyrocketed.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    category: 'Full-Stack',
    techTags: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'TypeScript'],
    seoTags: ['Technical SEO', 'Schema Markup', 'Core Web Vitals', 'Programmatic SEO'],
    metrics: [
      { label: 'Organic Traffic', value: '+420%' },
      { label: 'PageSpeed Score', value: '99/100' },
      { label: 'Indexed Pages', value: '15,000+' },
      { label: 'First Page Keywords', value: '450+' }
    ],
    liveUrl: 'https://apexrank-preview.example.com',
    githubUrl: 'https://github.com/shosunth/apexrank-platform',
    featured: true
  },
  {
    id: 'lumina-ecommerce',
    number: '02',
    title: 'Lumina Luxury — Headless E-Commerce & Local SEO Domination',
    tagline: 'Tripled E-Commerce Conversions & Ranked #1 for 30+ High-Buyer Keywords',
    description:
      'A headless e-commerce store built with React, Node.js, and WordPress/WooCommerce GraphQL. Features automated image compression, semantic category silos, and optimized checkout flow.',
    longDescription:
      'Built for an international luxury retail brand needing blazingly fast catalog search and rich product snippets on Google. Implemented structured Merchant Return Policy and Product Schema, yielding instant Google Shopping eligibility.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop',
    category: 'E-Commerce',
    techTags: ['React', 'WordPress', 'WooCommerce', 'Tailwind CSS', 'Stripe'],
    seoTags: ['E-Commerce SEO', 'Product Schema', 'Local Citations', 'Speed Optimization'],
    metrics: [
      { label: 'Revenue Increase', value: '+215%' },
      { label: 'Mobile Bounce Rate', value: '-38%' },
      { label: 'Top 3 Positions', value: '85 Keywords' },
      { label: 'Load Time', value: '0.8s' }
    ],
    liveUrl: 'https://lumina-luxury.example.com',
    githubUrl: 'https://github.com/shosunth/lumina-ecommerce',
    featured: true
  },
  {
    id: 'zenith-health',
    number: '03',
    title: 'Zenith Health — Medical Portal & Entity-Based SEO Architecture',
    tagline: 'Dominating Local Search & E-E-A-T Compliance for Multi-Location Clinics',
    description:
      'Full-stack healthcare booking platform utilizing MongoDB, Express, React, and Node.js (MERN) with comprehensive MedicalBusiness schema, doctor author entities, and geo-targeted landing pages.',
    longDescription:
      'Medical queries require strict adherence to Google Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). Structured physician bios, citation verification, and high-speed patient portal booking.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    category: 'Web Application',
    techTags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    seoTags: ['Local SEO', 'E-E-A-T Architecture', 'Medical Schema', 'Google Maps 3-Pack'],
    metrics: [
      { label: 'Map Pack Rankings', value: 'Top 3 (12 Locations)' },
      { label: 'Online Bookings', value: '+310%' },
      { label: 'Organic Impressions', value: '1.2M / mo' },
      { label: 'Crawl Errors', value: '0' }
    ],
    liveUrl: 'https://zenithhealth.example.com',
    githubUrl: 'https://github.com/shosunth/zenith-health-portal',
    featured: true
  },
  {
    id: 'pulse-media-hub',
    number: '04',
    title: 'Pulse Media — High-Velocity Digital Magazine & AMP Content Hub',
    tagline: 'Serving 500k+ Monthly Readers with Instant Google Discover Visibility',
    description:
      'A news and editorial media platform developed with Next.js App Router, Markdown CMS, and automated XML Sitemap syndication for Google News and Google Discover ranking.',
    longDescription:
      'Engineered an ultra-lightweight content rendering engine capable of handling high traffic surges without caching degradation. Built-in editorial SEO scoring linter helps journalists publish keyword-optimized articles instantly.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop',
    category: 'SEO & Growth',
    techTags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    seoTags: ['Google Discover', 'News SEO', 'Content Siloing', 'Editorial Workflows'],
    metrics: [
      { label: 'Monthly Readers', value: '550K+' },
      { label: 'Google Discover Clicks', value: '180K' },
      { label: 'Time on Page', value: '4m 12s' },
      { label: 'Cumulative Layout Shift', value: '0.00' }
    ],
    liveUrl: 'https://pulsemedia.example.com',
    githubUrl: 'https://github.com/shosunth/pulse-media-hub',
    featured: false
  }
];

export const experienceList: ExperienceItem[] = [
  {
    id: 'lead-dev-seo',
    jobTitle: 'Senior Web Developer & Lead SEO Strategist',
    companyName: 'Nexus Digital Tech Solutions',
    location: 'Dhaka, Bangladesh (Hybrid)',
    date: '2023 — Present',
    period: '3+ Years',
    shortDescription:
      'Spearhead technical SEO audits, core architecture development in Next.js/React, and international search marketing campaigns for enterprise clients.',
    responsibilities: [
      'Architect and build custom, high-speed web applications and headless CMS platforms with 95+ Google Lighthouse scores.',
      'Conduct deep technical SEO audits (crawl budget, canonicalization, JavaScript rendering, hreflang, structured data).',
      'Manage cross-functional teams of frontend developers, copywriters, and link builders to execute multi-channel growth campaigns.',
      'Supervise continuous monitoring of Google search algorithm updates and implement agile algorithmic recovery plans.'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Technical SEO', 'Semrush', 'Ahrefs', 'Google Search Console'],
    isCurrent: true
  },
  {
    id: 'fullstack-seo-specialist',
    jobTitle: 'Full-Stack Developer & SEO Specialist',
    companyName: 'GrowthVibe Interactive',
    location: 'Remote',
    date: '2021 — 2023',
    period: '2 Years',
    shortDescription:
      'Developed conversion-optimized websites and implemented on-page, off-page, and technical SEO strategies for high-growth startups.',
    responsibilities: [
      'Built 35+ custom responsive websites and web applications using React, WordPress, HTML5, CSS3, and Node.js.',
      'Increased client search visibility by an average of 250% through semantic content clusters and competitor backlink gap strategies.',
      'Configured Google Analytics 4 (GA4), Google Tag Manager (GTM), and automated conversion tracking dashboards.',
      'Resolved critical Core Web Vitals bottlenecks, reducing Cumulative Layout Shift (CLS) and Largest Contentful Paint (LCP) across all client properties.'
    ],
    technologies: ['JavaScript', 'WordPress', 'React', 'MongoDB', 'On-Page SEO', 'Keyword Research', 'Google Analytics 4'],
    isCurrent: false
  },
  {
    id: 'junior-web-dev',
    jobTitle: 'Web Developer & Technical SEO Associate',
    companyName: 'InnoTech Softworks',
    location: 'Dhaka, Bangladesh',
    date: '2019 — 2021',
    period: '2 Years',
    shortDescription:
      'Handled front-end interface development, semantic markup structuring, and on-page optimization for corporate clients.',
    responsibilities: [
      'Created modern mobile-first UI components using HTML5, CSS3, JavaScript, and responsive design frameworks.',
      'Implemented foundational on-page SEO including meta tags, OpenGraph data, XML sitemaps, and robots.txt rules.',
      'Assisted in keyword research, competitor rank tracking, and monthly organic traffic reporting.',
      'Optimized server response times and image delivery pipelines via CDNs and WebP conversion.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'SEO Auditing', 'Speed Optimization'],
    isCurrent: false
  }
];

export const certificationsList: CertificationItem[] = [
  {
    id: 'cert-google-analytics',
    certificateName: 'Google Analytics Individual Qualification (GA4)',
    issuingOrganization: 'Google Skillshop',
    issueDate: 'Jan 2024',
    certificateId: 'GA4-ID-982341-SC',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
    credentialUrl: 'https://skillshop.google.com',
    skillsCovered: ['Conversion Tracking', 'Event Attribution', 'Funnel Analysis', 'User Behavior']
  },
  {
    id: 'cert-semrush-tech-seo',
    certificateName: 'Advanced Technical SEO & Site Audit Masterclass',
    issuingOrganization: 'Semrush Academy',
    issueDate: 'Nov 2023',
    certificateId: 'SMR-TS-554209-X',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    credentialUrl: 'https://academy.semrush.com',
    skillsCovered: ['Crawl Budget', 'Core Web Vitals', 'Schema Validation', 'Log File Analysis']
  },
  {
    id: 'cert-meta-frontend',
    certificateName: 'Meta Front-End Developer Professional Certificate',
    issuingOrganization: 'Meta & Coursera',
    issueDate: 'Aug 2023',
    certificateId: 'META-FED-884102-SC',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    credentialUrl: 'https://coursera.org',
    skillsCovered: ['React.js', 'JavaScript ES6+', 'Responsive UI/UX', 'REST APIs', 'Unit Testing']
  },
  {
    id: 'cert-hubspot-inbound',
    certificateName: 'Inbound SEO & Content Strategy Certification',
    issuingOrganization: 'HubSpot Academy',
    issueDate: 'May 2023',
    certificateId: 'HUB-SEO-330198-A',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop',
    credentialUrl: 'https://academy.hubspot.com',
    skillsCovered: ['Topic Clustering', 'Search Intent', 'Content Siloing', 'Conversion Rate Optimization']
  },
  {
    id: 'cert-google-search-seo',
    certificateName: 'Google Search Central Webmaster & SEO Certification',
    issuingOrganization: 'Google for Developers',
    issueDate: 'Feb 2023',
    certificateId: 'GSC-DEV-109284-SC',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    credentialUrl: 'https://developers.google.com/search',
    skillsCovered: ['Mobile-First Indexing', 'Structured Data', 'HTTPS Security', 'Rendering Engine']
  },
  {
    id: 'cert-node-fullstack',
    certificateName: 'Full-Stack JavaScript & Node.js Developer',
    issuingOrganization: 'OpenJS Foundation / FreeCodeCamp',
    issueDate: 'Oct 2022',
    certificateId: 'OJS-DEV-776210-SC',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    credentialUrl: 'https://openjsf.org',
    skillsCovered: ['Node.js', 'Express.js', 'MongoDB', 'Authentication & JWT', 'REST Architecture']
  }
];

export const workProcessSteps: WorkProcessStep[] = [
  {
    stepNumber: '01',
    title: 'DISCOVER',
    subtitle: 'Understand the Business & Goals',
    description:
      'We begin with an in-depth discovery session exploring your business model, target market, revenue drivers, core value proposition, and key performance indicators (KPIs).',
    deliverables: ['Discovery Brief', 'Stakeholder Goals Audit', 'Target Audience Personas', 'Project Scope Document'],
    iconName: 'Compass'
  },
  {
    stepNumber: '02',
    title: 'RESEARCH',
    subtitle: 'Data, Keywords & Competitor Analysis',
    description:
      'Conduct rigorous competitor gap analysis, search intent mapping, keyword opportunity matrices, and historic SERP trend analysis to uncover high-ROI conversion opportunities.',
    deliverables: ['Keyword Intent Map', 'Competitor Gap Matrix', 'Market Opportunity Index', 'Crawl Gap Analysis'],
    iconName: 'Search'
  },
  {
    stepNumber: '03',
    title: 'PLAN',
    subtitle: 'SEO Strategy & Website Architecture',
    description:
      'Architect the master information structure, URL taxonomy, topic clusters, internal linking hierarchy, and technological stack chosen for lightning performance and search indexing.',
    deliverables: ['Information Architecture Map', 'URL Silo Hierarchy', 'Tech Stack Specification', 'SEO Roadmap'],
    iconName: 'GitBranch'
  },
  {
    stepNumber: '04',
    title: 'DESIGN',
    subtitle: 'UI/UX & Conversion Structure',
    description:
      'Create clean, accessible, high-conversion UI layouts with mathematical spacing, refined typography, and responsive micro-interactions engineered to maximize user engagement.',
    deliverables: ['Wireframes & Interactive Prototypes', 'Design System & Component Library', 'Conversion UX Flow', 'Accessibility Blueprint'],
    iconName: 'Layout'
  },
  {
    stepNumber: '05',
    title: 'BUILD',
    subtitle: 'Website Development & Implementation',
    description:
      'Develop pixel-perfect, clean, modular code using modern frameworks (React, Next.js, Node.js, Tailwind CSS) with zero bloat, strict type safety, and responsive adaptability.',
    deliverables: ['Production Web Application', 'Reusable Component Architecture', 'API Integrations', 'Content Management Setup'],
    iconName: 'Code2'
  },
  {
    stepNumber: '06',
    title: 'OPTIMIZE',
    subtitle: 'Technical & On-Page SEO',
    description:
      'Implement deep structured data (JSON-LD), semantic HTML5 tags, image compression pipelines, Core Web Vitals tuning (sub-1s LCP, 0 CLS), and canonical protection.',
    deliverables: ['Rich Snippet Schema Markup', 'Core Web Vitals 95+ Audit', 'Canonical & Hreflang Tags', 'Robots.txt & Sitemap Index'],
    iconName: 'Zap'
  },
  {
    stepNumber: '07',
    title: 'GROW',
    subtitle: 'Content, Local SEO & Authority Building',
    description:
      'Deploy authoritative, search-optimized content clusters, optimize Google Business Profile, secure high-tier industry citations, and execute white-hat digital PR outreach.',
    deliverables: ['Pillar Content Clusters', 'Local Business Citations', 'Google Map Pack Optimization', 'Author Entity Authority'],
    iconName: 'TrendingUp'
  },
  {
    stepNumber: '08',
    title: 'CONVERT',
    subtitle: 'Analytics, CRO & Performance Tracking',
    description:
      'Configure advanced Google Analytics 4 event tracking, conversion funnels, custom heatmaps, and user path recordings to optimize visitor-to-customer conversion rates.',
    deliverables: ['GA4 & GTM Event Setup', 'Conversion Funnel Dashboard', 'Heatmap Tracking Config', 'A/B Testing Baseline'],
    iconName: 'Target'
  },
  {
    stepNumber: '09',
    title: 'LAUNCH',
    subtitle: 'Testing, Indexing & Deployment',
    description:
      'Perform rigorous cross-browser testing, accessibility validation, security auditing, and automated submission to Google Search Console and Bing Webmaster for rapid indexing.',
    deliverables: ['Production Cloud Deployment', 'GSC Instant URL Submission', 'Security & SSL Validation', 'Cross-Device QA Report'],
    iconName: 'Rocket'
  },
  {
    stepNumber: '10',
    title: 'SCALE',
    subtitle: 'Continuous Optimization & Growth',
    description:
      'Post-launch monitoring of SERP positions, proactive algorithm adaptation, monthly performance reporting, continuous speed tuning, and ongoing keyword expansion.',
    deliverables: ['Monthly Organic Growth Reports', 'Keyword Rank Tracking', 'Algorithm Resilience Monitoring', 'Iterative Feature Sprints'],
    iconName: 'BarChart3'
  }
];

export const blogPosts: BlogPostItem[] = [
  {
    id: 'core-web-vitals-2026',
    title: 'Mastering Core Web Vitals in 2026: The Intersection of INP, LCP, and Modern React',
    slug: 'mastering-core-web-vitals-react-2026',
    category: 'SEO & Search',
    date: 'February 18, 2026',
    readTime: '6 min read',
    shortDescription:
      'How front-end rendering choices directly dictate Google rankings. A deep dive into Interaction to Next Paint (INP), Largest Contentful Paint (LCP), and server components.',
    content: [
      'In today’s search landscape, technical performance is no longer just a developer metric—it is a direct ranking and conversion factor in Google’s algorithmic evaluation.',
      'With Google replacing First Input Delay (FID) with Interaction to Next Paint (INP), web applications must prioritize main-thread responsiveness during the entire user session, not just on initial page load.',
      'By decoupling heavy JavaScript execution through Web Workers, employing React Server Components (RSC) to ship zero client-side bundles for static text, and lazy-loading non-critical CSS/JS, modern websites can effortlessly hit green 95+ scores.'
    ],
    tags: ['Core Web Vitals', 'Technical SEO', 'React', 'Performance'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'programmatic-seo-guide',
    title: 'The Architecture of Scalable Programmatic SEO with Next.js & Dynamic Data',
    slug: 'programmatic-seo-nextjs-guide',
    category: 'Web Development',
    date: 'January 24, 2026',
    readTime: '8 min read',
    shortDescription:
      'How to safely generate thousands of high-ranking, helpful, intent-matched landing pages without triggering Google thin-content or spam penalties.',
    content: [
      'Programmatic SEO is the art of using code and structured datasets to scale landing page creation for high-volume, long-tail search queries.',
      'However, modern search algorithms will severely penalize boilerplate content that lacks genuine utility. The secret lies in modular data synthesis: enriching each page with custom calculations, proprietary datasets, and user-centric interactive widgets.',
      'In this technical blueprint, we explore how Next.js Incremental Static Regeneration (ISR) and Edge caching enable millions of programmatic landing pages to serve in under 50ms.'
    ],
    tags: ['Programmatic SEO', 'Next.js', 'Information Architecture', 'Growth'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'schema-markup-entities',
    title: 'Entity-Based SEO: Dominating Knowledge Graphs and Rich Snippets with JSON-LD',
    slug: 'entity-based-seo-json-ld-guide',
    category: 'Performance & CRO',
    date: 'December 12, 2025',
    readTime: '5 min read',
    shortDescription:
      'Why keywords are giving way to entities and semantic graphs. How to properly connect your website schema to Wikipedia, Wikidata, and Google Knowledge Graph.',
    content: [
      'Google is no longer merely a keyword-matching engine; it is a semantic knowledge engine that maps entities (people, organizations, concepts, locations) and their relationships.',
      'By nesting JSON-LD Schema markup with explicit "sameAs" references to authoritative knowledge bases and utilizing @graph structures, we communicate our brand entity with zero ambiguity.',
      'This leads to guaranteed rich snippets, FAQ dropdowns in search results, and prominent Google Knowledge Panel recognition.'
    ],
    tags: ['Structured Data', 'JSON-LD', 'Schema', 'Semantic Web'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
  }
];

export const faqList: FAQItem[] = [
  // Web Development FAQs
  {
    id: 'faq-web-1',
    category: 'Web Development',
    question: 'What modern technologies and frameworks do you use for website development?',
    answer:
      'I specialize in building custom, high-performance web applications using React, Next.js, TypeScript, Node.js, Express, MongoDB, and Tailwind CSS. For content-heavy or client-managed websites, I also develop custom, ultra-fast WordPress and WooCommerce solutions optimized for Core Web Vitals.'
  },
  {
    id: 'faq-web-2',
    category: 'Web Development',
    question: 'Are all websites you develop mobile-friendly, responsive, and accessible?',
    answer:
      'Yes, 100%. Every website is architected with a mobile-first design principle, ensuring seamless usability, fast touch response, and fluid layouts across smartphones, tablets, laptops, and ultra-wide desktop monitors. Accessibility (WCAG standards) is built into every component.'
  },
  {
    id: 'faq-web-3',
    category: 'Web Development',
    question: 'How do you guarantee top-tier page load speed and Google PageSpeed scores?',
    answer:
      'I optimize code from the ground up: server-side rendering or static generation with Next.js, WebP/AVIF modern image compression with responsive srcset, code-splitting, tree-shaking unused styles with Tailwind, and deploying edge caching via CDNs. My goal is always 90+ on Google PageSpeed Insights.'
  },
  {
    id: 'faq-web-4',
    category: 'Web Development',
    question: 'Can I easily update content, images, and text on my website after launch?',
    answer:
      'Absolutely. I build modular systems with clean configuration files, headless CMS integrations (like Sanity, Strapi, or WordPress), or custom admin dashboards so you or your team can update copy, images, and products without writing a single line of code.'
  },

  // SEO & Search FAQs
  {
    id: 'faq-seo-1',
    category: 'SEO & Search',
    question: 'What makes your approach to SEO different from traditional marketing agencies?',
    answer:
      'Because I am both a Full-Stack Web Developer and an SEO Expert, I eliminate the disconnect between technical engineers and SEO strategists. I don’t just write audit recommendations—I directly implement server rendering, structured schema code, crawl budget optimizations, and speed fixes myself.'
  },
  {
    id: 'faq-seo-2',
    category: 'SEO & Search',
    question: 'How long does it typically take to see measurable SEO results and ranking gains?',
    answer:
      'Technical SEO fixes and indexation improvements often show positive momentum within 2 to 4 weeks. For competitive organic keyword rankings and major traffic increases, most campaigns see significant exponential growth within 3 to 6 months of consistent strategy execution.'
  },
  {
    id: 'faq-seo-3',
    category: 'SEO & Search',
    question: 'What is Technical SEO and why is it crucial for high rankings?',
    answer:
      'Technical SEO ensures that search engines can easily crawl, render, index, and understand your website without encountering bottlenecks. It includes Core Web Vitals performance, XML sitemaps, structured JSON-LD schema, canonicalization, mobile usability, and clean site hierarchy.'
  },
  {
    id: 'faq-seo-4',
    category: 'SEO & Search',
    question: 'Do you help local businesses rank in the Google Maps 3-Pack and local searches?',
    answer:
      'Yes! I provide end-to-end Local SEO: Google Business Profile (GBP) optimization, geo-targeted landing page creation, local citation consistency (NAP), customer review generation strategies, and localized schema markup to dominate local area search intent.'
  }
];

export const resumeData: ResumeData = {
  summary:
    'Results-driven Web Developer & SEO Expert with 5+ years of demonstrable success in developing high-speed web applications and executing data-backed organic search campaigns. Proven track record of boosting client revenues through Core Web Vitals optimization, entity-based technical SEO, and modern JavaScript architectures.',
  executiveSummary:
    'Results-driven Web Developer & SEO Expert with 5+ years of demonstrable success in developing high-speed web applications and executing data-backed organic search campaigns. Proven track record of boosting client revenues through Core Web Vitals optimization, entity-based technical SEO, and modern JavaScript architectures.',
  highlights: [
    '5+ Years of Full-Stack Web Development (React, Next.js, Node.js, TypeScript)',
    'Specialized in Technical SEO, Core Web Vitals (95+ scores), & Google Algorithm Alignment',
    '70+ Projects delivered globally with an average +280% organic traffic increase',
    'Certified in Google Analytics 4, Semrush Technical SEO, and Meta Front-End Engineering'
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'Leading University of Bangladesh',
      period: '2016 — 2020',
      grade: 'First Class Honors',
      details: 'Specialized in Software Engineering, Web Technologies, Database Systems & Algorithms.'
    }
  ],
  coreCompetencies: [
    'Next.js & React SPA/SSR Architecture',
    'Technical & Programmatic SEO',
    'Core Web Vitals & Performance Engineering',
    'Semantic Schema (JSON-LD) & Knowledge Graphs',
    'RESTful API Development & Node.js',
    'Conversion Rate Optimization (CRO) & GA4 Analytics',
    'Local SEO & Google Business Profile Domination',
    'WordPress & Headless CMS Engineering'
  ]
};

export const defaultSEOSettings: SEOSettings = {
  siteTitle: 'Shosunth Chakarborty — Web Developer & SEO Expert',
  titleTemplate: '%s | Shosunth Chakarborty',
  metaDescription:
    'High-performance Full-Stack Web Development, technical SEO architecture, Core Web Vitals optimization, and data-backed search engine growth strategies by Shosunth Chakarborty.',
  keywords: [
    'Web Developer',
    'SEO Expert',
    'Full-Stack Developer Bangladesh',
    'Technical SEO Consultant',
    'Core Web Vitals Specialist',
    'React Developer',
    'Next.js Developer',
    'WordPress Speed Optimization',
    'Local SEO Expert'
  ],
  canonicalUrl: 'https://shosunth.dev',
  author: 'Shosunth Chakarborty',
  ogImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
  ogType: 'website',
  twitterHandle: '@shosunth_dev',
  twitterCard: 'summary_large_image',
  robotsIndex: true,
  robotsFollow: true,
  googleVerificationId: 'google-site-verification-placeholder-code-2026',
  bingVerificationId: 'bing-site-verification-placeholder-code-2026',
  schemaType: 'Person',
  structuredDataJson: JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Shosunth Chakarborty',
      jobTitle: 'Web Developer & SEO Expert',
      url: 'https://shosunth.dev',
      sameAs: [
        'https://linkedin.com/in/shosunth-chakarborty',
        'https://github.com/shosunth',
        'https://facebook.com/shosunth.chakarborty'
      ],
      knowsAbout: [
        'Web Development',
        'Search Engine Optimization',
        'Technical SEO',
        'React',
        'Next.js',
        'Core Web Vitals',
        'TypeScript'
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dhaka',
        addressCountry: 'Bangladesh'
      }
    },
    null,
    2
  ),
  sitemapEnabled: true
};

export const defaultContactMessages: ContactMessage[] = [
  {
    id: 'msg-sample-1',
    name: 'Rahim Chowdhury',
    email: 'rahim@techfin.io',
    subject: 'Web Application & Technical SEO Consultation',
    message:
      'Hi Shosunth, we are looking to revamp our fintech platform and need both top-tier React engineering and deep technical SEO to boost our search rankings. Let us know your availability for a discovery call.',
    status: 'unread',
    createdAt: new Date().toISOString()
  }
];

