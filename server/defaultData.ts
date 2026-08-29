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
  ContactMessage,
  PortfolioDatabase
} from '../src/types';

export const defaultProfile: PersonalProfile = {
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

export const defaultStatistics: StatItem[] = [
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

export const defaultSkills: SkillItem[] = [
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
    experienceYears: '5+ Years',
    description: 'Schema markup (JSON-LD), crawl budget optimization, indexation architecture, and canonicals.',
    highlight: true
  },
  {
    id: 'onpage-seo',
    name: 'On-Page SEO',
    category: 'SEO',
    level: 95,
    icon: 'FileText',
    experienceYears: '5+ Years',
    description: 'Semantic HTML5 structure, header hierarchy (H1-H6), internal linking silos, and intent-focused copy.'
  },
  {
    id: 'offpage-seo',
    name: 'Off-Page SEO',
    category: 'SEO',
    level: 90,
    icon: 'Share2',
    experienceYears: '4+ Years',
    description: 'High-authority white-hat link acquisition, brand citations, digital PR outreach, and entity building.'
  },
  {
    id: 'kw-research',
    name: 'Keyword Research',
    category: 'SEO',
    level: 94,
    icon: 'Key',
    experienceYears: '5+ Years',
    description: 'Search intent mapping, long-tail opportunity discovery, competitor gap analysis with Semrush/Ahrefs.'
  },
  {
    id: 'local-seo',
    name: 'Local SEO',
    category: 'SEO',
    level: 92,
    icon: 'MapPin',
    experienceYears: '4+ Years',
    description: 'Google Business Profile (GBP) ranking, NAP consistency, local pack optimization, and geocoded reviews.'
  },
  {
    id: 'speed-opt',
    name: 'Page Speed Optimization',
    category: 'SEO',
    level: 97,
    icon: 'Gauge',
    experienceYears: '5+ Years',
    description: 'Core Web Vitals excellence (LCP < 1.2s, CLS 0.00, INP < 100ms), asset bundling, and image compression.',
    highlight: true
  },
  {
    id: 'react-dev',
    name: 'React.js',
    category: 'Frontend',
    level: 95,
    icon: 'Code2',
    experienceYears: '5+ Years',
    description: 'Modern SPA development, custom hooks, context state management, and reusable component libraries.',
    highlight: true
  },
  {
    id: 'nextjs-dev',
    name: 'Next.js',
    category: 'Frontend',
    level: 92,
    icon: 'Globe',
    experienceYears: '4+ Years',
    description: 'Server Components (RSC), SSR, SSG, incremental static regeneration (ISR), and Next SEO integration.',
    highlight: true
  },
  {
    id: 'typescript-dev',
    name: 'TypeScript',
    category: 'Frontend',
    level: 90,
    icon: 'Terminal',
    experienceYears: '4+ Years',
    description: 'Strict type safety, robust interface modeling, and enterprise-level maintainability.'
  },
  {
    id: 'tailwind-dev',
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 98,
    icon: 'Sparkles',
    experienceYears: '5+ Years',
    description: 'Custom design systems, responsive mobile-first architecture, dark/light theme tokens, and clean layout geometry.',
    highlight: true
  },
  {
    id: 'nodejs-dev',
    name: 'Node.js & Express',
    category: 'Backend & CMS',
    level: 88,
    icon: 'Server',
    experienceYears: '4+ Years',
    description: 'RESTful API design, middleware pipelines, authentication, and performant backend services.'
  },
  {
    id: 'mongodb-dev',
    name: 'MongoDB',
    category: 'Backend & CMS',
    level: 85,
    icon: 'Database',
    experienceYears: '4+ Years',
    description: 'NoSQL document schemas, indexing for high-throughput reads, aggregation pipelines, and Mongoose ODM.'
  },
  {
    id: 'wordpress-dev',
    name: 'WordPress & WooCommerce',
    category: 'Backend & CMS',
    level: 94,
    icon: 'Layers',
    experienceYears: '5+ Years',
    description: 'Custom theme & plugin development, headless WordPress setups, WooCommerce customization, and security hardening.'
  },
  {
    id: 'gsc-ga4',
    name: 'GSC & GA4 Analytics',
    category: 'Strategy & Tools',
    level: 96,
    icon: 'BarChart2',
    experienceYears: '5+ Years',
    description: 'Search Console query tracking, GA4 event-driven telemetry, custom funnel reports, and conversion tracking.'
  },
  {
    id: 'semrush-ahrefs',
    name: 'Semrush & Ahrefs',
    category: 'Strategy & Tools',
    level: 95,
    icon: 'Compass',
    experienceYears: '5+ Years',
    description: 'Comprehensive site audits, competitor backlink profiling, content clustering, and rank tracking.'
  }
];

export const defaultProjects: ProjectItem[] = [
  {
    id: 'project-1',
    number: '01',
    title: 'Enterprise Technical SEO & E-Commerce Web Platform',
    tagline: 'Achieved +320% Organic Traffic Growth and Sub-Second Core Web Vitals',
    description:
      'Engineered an enterprise-grade e-commerce application using Next.js, TypeScript, and Tailwind CSS. Implemented automated programmatic schema markup (JSON-LD), server-side rendering, and image CDN pipelines.',
    longDescription:
      'The client was suffering from severe organic rank drops due to legacy monolithic software and poor Core Web Vitals (LCP > 4.8s). We rebuilt the entire front-end using Next.js App Router with ISR, configured dynamic category silos, and authored custom rich snippets for product listings. Within 4 months, organic impressions grew by 450% and daily sales conversions doubled.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    category: 'Full-Stack',
    techTags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    seoTags: ['Technical SEO', 'Schema Markup', 'Core Web Vitals', 'PageSpeed 98'],
    metrics: [
      { label: 'Organic Traffic', value: '+320%' },
      { label: 'Mobile PageSpeed', value: '98/100' },
      { label: 'Conversion Lift', value: '+44%' },
      { label: 'Google Top 3 Ranks', value: '85+ KWs' }
    ],
    liveUrl: 'https://example.com/project1',
    githubUrl: 'https://github.com/shosunth/enterprise-ecommerce-seo',
    featured: true
  },
  {
    id: 'project-2',
    number: '02',
    title: 'SaaS Analytics Dashboard & Growth Engine',
    tagline: 'High-Speed B2B Portal with Real-Time Keyword Tracking Telemetry',
    description:
      'Developed a multi-tenant SaaS analytics web dashboard featuring real-time rank tracking, crawl error logs, and automated SERP change notifications.',
    longDescription:
      'Architected a sleek dashboard interface with React and Tailwind CSS that connects to Google Search Console and custom SERP scraping APIs. Users can visualize competitor ranking changes, discover keyword decay, and generate instant technical SEO audit reports in PDF format.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    category: 'Web Application',
    techTags: ['React', 'Express.js', 'REST API', 'Tailwind CSS', 'Chart.js'],
    seoTags: ['SERP Tracking', 'GSC API', 'Crawl Audits', 'Entity SEO'],
    metrics: [
      { label: 'Daily Active Users', value: '4,200+' },
      { label: 'API Response Time', value: '< 65ms' },
      { label: 'Audited URLs', value: '1.2M+' },
      { label: 'Data Accuracy', value: '99.8%' }
    ],
    liveUrl: 'https://example.com/project2',
    githubUrl: 'https://github.com/shosunth/saas-seo-telemetry',
    featured: true
  },
  {
    id: 'project-3',
    number: '03',
    title: 'Multi-Location Healthcare Local SEO Domination',
    tagline: 'Local 3-Pack Supremacy Across 12 Regional Medical Clinics',
    description:
      'Designed high-converting localized clinic portals and executed a comprehensive Local SEO strategy across Google Business Profiles, citations, and geo-targeted schema.',
    longDescription:
      'Rebuilt 12 clinic landing pages with localized JSON-LD MedicalBusiness schema, NAP validation across 80+ directories, and structured patient review systems. Organic phone calls and consultation bookings increased by 215% within 90 days.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    category: 'SEO & Growth',
    techTags: ['WordPress Headless', 'React', 'Tailwind CSS', 'Schema.org'],
    seoTags: ['Local SEO', 'Google Business Profile', 'Local 3-Pack', 'Geo Schema'],
    metrics: [
      { label: 'Local Pack #1 Ranks', value: '94%' },
      { label: 'Phone Inquiries', value: '+215%' },
      { label: 'Map Views', value: '45K/mo' },
      { label: 'Review Velocity', value: '4.9 ⭐' }
    ],
    liveUrl: 'https://example.com/project3',
    featured: true
  },
  {
    id: 'project-4',
    number: '04',
    title: 'High-Volume WooCommerce Speed & Conversion Overhaul',
    tagline: 'Reduced Page Load Time from 6.8s to 0.9s with +180% Organic Revenue',
    description:
      'Executed full-stack performance tuning, custom database indexation, caching layers, and SEO category hierarchy restructuring for a 10,000+ SKU store.',
    longDescription:
      'The store was struggling with high bounce rates on mobile due to bloated plugins and database query locks. We stripped unnecessary overhead, implemented Redis object caching, custom image optimization scripts, and refactored internal linking architectures.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67e557224f?q=80&w=1000&auto=format&fit=crop',
    category: 'E-Commerce',
    techTags: ['WooCommerce', 'PHP/MySQL', 'Redis', 'Tailwind CSS', 'Varnish'],
    seoTags: ['Core Web Vitals', 'Database Optimization', 'E-Com SEO', 'CRO'],
    metrics: [
      { label: 'Load Time', value: '0.9s (was 6.8s)' },
      { label: 'Bounce Rate', value: '-38%' },
      { label: 'Organic Revenue', value: '+180%' },
      { label: 'Mobile LCP', value: '1.1s' }
    ],
    liveUrl: 'https://example.com/project4',
    featured: false
  }
];

export const defaultExperience: ExperienceItem[] = [
  {
    id: 'exp-1',
    jobTitle: 'Senior Web Developer & Lead SEO Strategist',
    companyName: 'Nexus Digital Tech Solutions',
    location: 'Dhaka, Bangladesh (Hybrid)',
    date: '2023 — Present',
    period: '2023 — Present',
    shortDescription:
      'Leading front-end architecture and technical SEO execution across enterprise client portfolios, delivering high-speed React/Next.js platforms and measurable organic search growth.',
    responsibilities: [
      'Architect scalable React, Next.js, and TypeScript web applications with clean component systems and state management.',
      'Conduct deep technical SEO audits, fixing Core Web Vitals issues (LCP, INP, CLS) and optimizing crawl budgets for 500k+ page domains.',
      'Deploy custom JSON-LD schema graphs, internal linking engines, and localized SEO pipelines for international brands.',
      'Collaborate directly with stakeholders to align technical sprints with KPI metrics and revenue conversion goals.'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Technical SEO', 'GA4', 'Tailwind CSS'],
    isCurrent: true
  },
  {
    id: 'exp-2',
    jobTitle: 'Full-Stack Developer & SEO Specialist',
    companyName: 'GrowthVibe Interactive',
    location: 'Remote',
    date: '2021 — 2023',
    period: '2021 — 2023',
    shortDescription:
      'Engineered custom web portals, e-commerce storefronts, and programmatic SEO content pipelines for scaling startups and B2B SaaS firms.',
    responsibilities: [
      'Built custom responsive web applications with React, Express, MongoDB, and Tailwind CSS.',
      'Spearheaded technical On-Page and Off-Page SEO campaigns that drove average +280% organic traffic gains within 6 months.',
      'Optimized server response times (TTFB) and database indexing for high-volume client websites.',
      'Integrated Google Analytics 4 and Tag Manager custom event tracking to measure funnel drop-offs.'
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'REST APIs', 'SEO Auditing', 'Semrush', 'Ahrefs']
  },
  {
    id: 'exp-3',
    jobTitle: 'Web Developer & Technical SEO Associate',
    companyName: 'InnoTech Softworks',
    location: 'Dhaka, Bangladesh',
    date: '2019 — 2021',
    period: '2019 — 2021',
    shortDescription:
      'Developed responsive WordPress and custom JavaScript websites while performing on-page keyword optimization and technical site health remediations.',
    responsibilities: [
      'Built fast, custom WordPress themes and modern responsive websites using HTML5, CSS3, JavaScript, and PHP.',
      'Implemented on-page keyword hierarchies, meta tags, XML sitemaps, robots.txt, and 301 redirect mapping.',
      'Resolved 404 crawl errors, canonical duplicates, and mixed-content SSL issues across client domains.',
      'Created performance benchmark reports for client leadership team reviews.'
    ],
    technologies: ['JavaScript', 'WordPress', 'HTML5/CSS3', 'PHP', 'GSC', 'Technical SEO']
  }
];

export const defaultCertifications: CertificationItem[] = [
  {
    id: 'cert-1',
    certificateName: 'Google Analytics Individual Qualification (GA4)',
    issuingOrganization: 'Google Skillshop',
    issueDate: 'January 2024',
    certificateId: 'GA4-ID-982341-SC',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop',
    credentialUrl: 'https://skillshop.credential.net',
    skillsCovered: ['GA4 Data Streams', 'Event Tracking', 'Attribution Modeling', 'Conversion Funnels', 'E-commerce Telemetry']
  },
  {
    id: 'cert-2',
    certificateName: 'Advanced Technical SEO & Site Audit Masterclass',
    issuingOrganization: 'Semrush Academy',
    issueDate: 'October 2023',
    certificateId: 'SMR-TS-554209-X',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop',
    credentialUrl: 'https://semrush.com/academy',
    skillsCovered: ['Crawl Budget Optimization', 'Log File Analysis', 'Core Web Vitals Engineering', 'Schema Markup JSON-LD']
  },
  {
    id: 'cert-3',
    certificateName: 'Meta Front-End Developer Professional Certificate',
    issuingOrganization: 'Meta / Coursera',
    issueDate: 'May 2023',
    certificateId: 'META-FED-884102-SC',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop',
    credentialUrl: 'https://coursera.org',
    skillsCovered: ['React.js Architecture', 'Advanced JavaScript', 'Version Control (Git)', 'UI/UX Principles', 'Web Accessibility']
  },
  {
    id: 'cert-4',
    certificateName: 'Inbound SEO & Content Strategy Certification',
    issuingOrganization: 'HubSpot Academy',
    issueDate: 'August 2023',
    certificateId: 'HUB-SEO-330198-A',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=400&auto=format&fit=crop',
    credentialUrl: 'https://academy.hubspot.com',
    skillsCovered: ['Topic Clustering', 'Search Intent Optimization', 'Link Building Strategies', 'Content Auditing']
  }
];

export const defaultWorkProcessSteps: WorkProcessStep[] = [
  {
    stepNumber: '01',
    title: 'DISCOVER & AUDIT',
    subtitle: 'Business Strategy & Technical Baseline',
    description:
      'We conduct deep stakeholder discovery to identify business goals, target audience intent, competitors, and run an exhaustive 100+ point technical SEO & performance audit.',
    deliverables: ['Competitive Benchmark Report', 'Technical Architecture Audit', 'Target Audience Persona & Intent Map'],
    iconName: 'Search'
  },
  {
    stepNumber: '02',
    title: 'STRATEGIZE & ARCHITECT',
    subtitle: 'Information Hierarchy & Technology Stack',
    description:
      'Design modern URL silos, entity keyword clusters, and system architecture blueprints ensuring high-speed rendering and zero crawl friction.',
    deliverables: ['Information Architecture Map', 'Keyword Clustering Matrix', 'Technical Stack Specification (React/Next/Node)'],
    iconName: 'Compass'
  },
  {
    stepNumber: '03',
    title: 'UI/UX & PROTOTYPING',
    subtitle: 'High-Density Aesthetic Engineering',
    description:
      'Craft responsive, accessible user interfaces with deliberate typography, high contrast geometry, and micro-interactions designed to maximize user engagement.',
    deliverables: ['Interactive Component Mockups', 'Design Token System', 'Mobile-First Responsive Wireframes'],
    iconName: 'Layout'
  },
  {
    stepNumber: '04',
    title: 'CLEAN-CODE DEVELOPMENT',
    subtitle: 'Modular Full-Stack Construction',
    description:
      'Write modular, strictly typed TypeScript code with React/Next.js, Node.js, and Tailwind CSS. Built with semantic HTML5 tags to guarantee native search crawler readability.',
    deliverables: ['Production-Grade Codebase', 'Reusable Component Library', 'Secure API Endpoints'],
    iconName: 'Code2'
  },
  {
    stepNumber: '05',
    title: 'TECHNICAL SEO INJECTION',
    subtitle: 'Schema, Entities & Indexation Pipes',
    description:
      'Inject comprehensive JSON-LD structured schema (Person, WebSite, Organization, LocalBusiness), dynamic XML sitemaps, robots.txt, and canonical tags.',
    deliverables: ['Structured Data JSON-LD Graph', 'Optimized XML Sitemap & Robots.txt', 'Canonical & OpenGraph Implementation'],
    iconName: 'Cpu'
  },
  {
    stepNumber: '06',
    title: 'SPEED & CORE WEB VITALS',
    subtitle: 'Sub-Second Page Load Optimization',
    description:
      'Fine-tune LCP, CLS, and INP metrics using server-side compression, responsive WebP image pipelines, script deferral, and edge caching strategies.',
    deliverables: ['90+ PageSpeed Insights Score', 'Core Web Vitals Green Badge', 'Optimized Asset Bundles'],
    iconName: 'Gauge'
  },
  {
    stepNumber: '07',
    title: 'QA & CROSS-DEVICE TESTING',
    subtitle: 'Exhaustive Validation & Zero Defects',
    description:
      'Rigorous cross-browser testing across Chrome, Safari, Firefox, iOS, and Android. Validate broken links, 404 handlers, form validations, and accessibility (WCAG AA).',
    deliverables: ['Cross-Browser QA Matrix', 'Accessibility Compliance Audit', 'Error Boundary & Fallback Logs'],
    iconName: 'ShieldCheck'
  },
  {
    stepNumber: '08',
    title: 'DEPLOYMENT & LAUNCH',
    subtitle: 'Edge Infrastructure & SSL Setup',
    description:
      'Seamless production deployment to high-availability cloud edge infrastructure with automated CI/CD pipelines, SSL certificate validation, and CDN edge routing.',
    deliverables: ['Live Cloud Deployment', 'Automated CI/CD Integration', 'SSL & DNS Verification'],
    iconName: 'Rocket'
  },
  {
    stepNumber: '09',
    title: 'GSC & GA4 INTEGRATION',
    subtitle: 'Telemetry, Indexing & Tracking',
    description:
      'Submit sitemaps directly to Google Search Console and Bing Webmaster Tools. Configure GA4 event tracking, goal conversions, and custom user flow dashboards.',
    deliverables: ['Search Console Indexation Request', 'GA4 Custom Conversion Tracking', 'Live Ranking Dashboard Setup'],
    iconName: 'BarChart2'
  },
  {
    stepNumber: '10',
    title: 'GROWTH & ITERATION',
    subtitle: 'Continuous Ranking & CRO Elevation',
    description:
      'Continuous monthly performance monitoring, algorithm adaptation, backlink authority expansion, and A/B conversion rate optimization.',
    deliverables: ['Monthly Organic Growth Reports', 'Keyword Movement Tracking', 'Continuous Technical Maintenance'],
    iconName: 'TrendingUp'
  }
];

export const defaultBlogPosts: BlogPostItem[] = [
  {
    id: 'blog-1',
    title: 'Technical SEO in 2026: Mastering Entity Optimization and Core Web Vitals',
    slug: 'technical-seo-2026-entity-optimization-core-web-vitals',
    category: 'SEO & Search',
    date: 'March 15, 2026',
    readTime: '6 min read',
    shortDescription:
      'A deep technical dive into how Google’s algorithm uses knowledge graphs and entity relationships alongside Core Web Vitals to rank enterprise web applications.',
    content: [
      'Search engines have moved permanently from simple keyword string matching to sophisticated entity understanding and semantic knowledge graph mapping.',
      'To win in 2026, web developers and SEO professionals must work synchronously. Every React or Next.js component should produce clean semantic HTML with nested JSON-LD schema that clearly establishes your brand, products, and author authority.',
      'Core Web Vitals are no longer an optional speed metric—they represent the barrier to entry for top 3 search positions. Maintaining an LCP under 1.2s and zero Layout Shift (CLS 0.00) directly correlates with measurable conversion gains.'
    ],
    tags: ['Technical SEO', 'Entity SEO', 'Core Web Vitals', 'Schema JSON-LD', 'Page Speed'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'blog-2',
    title: 'Building Ultra-Fast Next.js Applications Optimized for Search Engine Crawlers',
    slug: 'building-ultra-fast-nextjs-seo-applications',
    category: 'Web Development',
    date: 'February 28, 2026',
    readTime: '8 min read',
    shortDescription:
      'Learn how to leverage React Server Components, Streaming SSR, and dynamic sitemaps in Next.js to deliver blazing speeds and effortless search engine indexation.',
    content: [
      'Single Page Applications (SPAs) rendered exclusively on the client-side often struggle with search crawler latency. Next.js solves this by providing hybrid rendering models tailored to content volatility.',
      'By utilizing React Server Components (RSC), we reduce client JavaScript bundle sizes by up to 60%, resulting in instant Time-To-Interactive (TTI) and stellar Mobile Core Web Vitals.',
      'Pairing ISR (Incremental Static Regeneration) with dynamic OpenGraph generation ensures that every single article or product page is crawled seamlessly by Googlebot within minutes of publication.'
    ],
    tags: ['Next.js', 'React', 'SSR', 'Web Development', 'Search Indexing'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'blog-3',
    title: 'The Local SEO Blueprint: Dominating Google Maps 3-Pack Rankings',
    slug: 'local-seo-blueprint-google-maps-3-pack',
    category: 'Strategy',
    date: 'January 20, 2026',
    readTime: '5 min read',
    shortDescription:
      'Actionable strategies for local businesses to secure top 3 map positions, generate localized citations, and turn local search queries into paying customers.',
    content: [
      'Over 46% of all Google searches have local commercial intent. If your business is not visible in the Google Maps Local 3-Pack, you are losing high-intent customers to nearby competitors every hour.',
      'The foundational pillars of Local SEO consist of Google Business Profile (GBP) completeness, consistent Name-Address-Phone (NAP) citations across regional directories, and structured LocalBusiness schema.',
      'Actively managing customer review velocity with keywords in review responses provides strong algorithmic signals that boost your geo-relevance radius.'
    ],
    tags: ['Local SEO', 'Google Maps', 'GBP Optimization', 'Local Citations', 'Digital Growth'],
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop'
  }
];

export const defaultFAQList: FAQItem[] = [
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

export const defaultResumeData: ResumeData = {
  executiveSummary:
    'Results-driven Web Developer & SEO Expert with 5+ years of demonstrable success in developing high-speed web applications and executing data-backed organic search campaigns. Proven track record of boosting client revenues through Core Web Vitals optimization, entity-based technical SEO, and modern JavaScript architectures.',
  coreCompetencies: [
    'Technical & Programmatic SEO Architecture',
    'Core Web Vitals & Sub-Second PageSpeed Engineering',
    'React, Next.js & TypeScript Front-End Systems',
    'Node.js & Express RESTful API Backends',
    'Semantic Schema (JSON-LD) & Knowledge Graph Mapping',
    'Conversion Rate Optimization (CRO) & GA4 Telemetry',
    'Local SEO & Google Business Profile Domination',
    'Custom WordPress & Headless CMS Engineering'
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'Leading University of Bangladesh',
      period: '2016 — 2020',
      grade: 'First Class Honors',
      details: 'Specialized in Software Engineering, Web Technologies, Database Management Systems, and Algorithms.'
    }
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
    name: 'Robert Vance',
    email: 'robert@vancedigital.com',
    subject: 'Enterprise E-Commerce Technical SEO & React Redesign',
    message:
      'Hello Shosunth, we are looking for a senior engineer to revamp our 20,000 product store using Next.js and optimize our Core Web Vitals. Let us know your availability for a discovery call.',
    createdAt: '2026-03-24T14:20:00.000Z',
    status: 'unread',
    notes: 'High-priority enterprise lead.'
  }
];

export const getDefaultDatabase = (): PortfolioDatabase => ({
  profile: defaultProfile,
  statistics: defaultStatistics,
  skills: defaultSkills,
  projects: defaultProjects,
  experience: defaultExperience,
  certifications: defaultCertifications,
  workProcessSteps: defaultWorkProcessSteps,
  blogPosts: defaultBlogPosts,
  faqList: defaultFAQList,
  resumeData: defaultResumeData,
  seoSettings: defaultSEOSettings,
  messages: defaultContactMessages,
  lastUpdated: new Date().toISOString()
});
