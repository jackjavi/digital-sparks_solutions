export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  planId: string;
  downloadLink?: string;
  featured?: boolean;
  isConsultation?: boolean;
}

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  products: Product[];
  features: string[];
  color: string;
  gradient: string;
  imageUrl: string;
  gridImageUrl?: string;
  detailedContent: {
    overview: string;
    benefits: string[];
    whatYouGet: string[];
    whoIsThisFor: string[];
    process: {
      step: number;
      title: string;
      description: string;
    }[];
  };
}

export const servicesData: ServiceData[] = [
  {
    slug: "healthcare-consultancy",
    title: "Healthcare Consultancy",
    shortDescription:
      "Expert guidance for launching and scaling your UK care agency with comprehensive CQC registration support and proven growth strategies.",
    description:
      "Navigate the UK healthcare sector with confidence. From CQC registration to winning contracts and building a thriving care agency, our specialized consultancy provides the expertise you need to succeed in the competitive care industry.",
    icon: "HeartPulse",
    products: [
      {
        id: "cqc-registration-guide",
        name: "Complete Guide to CQC Registration",
        description:
          "Step-by-step guidance to successfully register your care agency with the CQC and meet all compliance standards.",
        price: 100,
        currency: "USD",
        planId: "plan_QilQlPvO1MY6Q",
        downloadLink:
          "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/The_Complete_Guide_to_CQC_Registration_obxmp4.odt",
        featured: true,
        isConsultation: false,
      },
      {
        id: "win-clients-contracts",
        name: "Win Clients & Land Contracts – The Human Blueprint for Your UK Agency",
        description:
          "Master the strategies real care agency owners use to attract clients, secure contracts, and grow sustainably.",
        price: 150,
        currency: "USD",
        planId: "plan_Cjku0NApzDhzM",
        downloadLink:
          "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/Win_Clients_Land_Contracts_-The_Human_Blueprint_for_Your_UK_Care_Agency_byrosw.odt",
        featured: true,
        isConsultation: false,
      },
      {
        id: "start-care-agency",
        name: "Start Your Care Agency in the UK",
        description:
          "Everything you need to launch your registered care agency — from setup to first clients.",
        price: 60,
        currency: "USD",
        planId: "plan_3mJh7D44s7t5S",
        downloadLink:
          "https://res.cloudinary.com/popit/raw/upload/v1762831152/DSS-EBOOKS/Start_Your_Care_Agency_in_the_UK_hkilur.odt",
        featured: true,
        isConsultation: false,
      },
      {
        id: "non-cqc-care-agency",
        name: "Start Your Non-CQC Care Agency in the UK (Step-by-Step Guide)",
        description:
          "Launch a successful non-CQC care service with this easy, practical guide tailored for beginners.",
        price: 50,
        currency: "USD",
        planId: "plan_VMBEBmL6ED7X1",
        downloadLink:
          "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/Win_Clients_Land_Contracts_-The_Human_Blueprint_for_Your_UK_Care_Agency_byrosw.odt",
        featured: true,
        isConsultation: false,
      },
      {
        id: "healthcare-consultation",
        name: "One-to-One Healthcare Consultation",
        description:
          "Book a personalized consultation to discuss your care business goals, registration challenges, or strategy needs.",
        price: 70,
        currency: "USD",
        planId: "plan_2UDMih9SkT0j1",
        isConsultation: true,
      },
    ],
    features: [
      "CQC Registration Support",
      "Contract Winning Strategies",
      "Compliance Guidance",
      "Growth & Scaling Advice",
    ],
    color: "from-red-500 to-rose-600",
    gradient: "bg-linear-to-br from-red-500/10 to-rose-600/10",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    gridImageUrl:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80",
    detailedContent: {
      overview:
        "The UK healthcare sector offers incredible opportunities for qualified professionals and entrepreneurs, but navigating registration requirements, compliance regulations, and care agency setup can be overwhelming. Our Healthcare Consultancy provides expert guidance to help you successfully establish and grow your care business in the UK. Whether you're starting from scratch or scaling an existing agency, we offer comprehensive resources and personalized support to ensure your success in this rewarding industry.",
      benefits: [
        "Fast-track your care agency setup with proven strategies",
        "Avoid costly mistakes and regulatory pitfalls with expert guidance",
        "Master CQC registration and compliance requirements confidently",
        "Learn winning strategies to attract clients and secure contracts",
        "Access industry-tested blueprints from successful agency owners",
        "Build a sustainable, profitable care business that makes a difference",
        "Receive personalized consultation for your unique challenges",
        "Stay compliant with ever-changing healthcare regulations",
      ],
      whatYouGet: [
        "Comprehensive guides covering every aspect of care agency setup",
        "Step-by-step CQC registration walkthrough with compliance checklists",
        "Proven client acquisition and contract-winning strategies",
        "Business planning templates specifically for care agencies",
        "Marketing and positioning guidance for the care sector",
        "Financial planning tools and pricing strategies",
        "Staff recruitment and training frameworks",
        "Quality assurance and inspection preparation materials",
        "One-to-one consultation sessions with care industry experts",
        "Ongoing email support for your questions and challenges",
        "Access to care agency owner community and networking opportunities",
        "Regular updates on regulatory changes and industry best practices",
      ],
      whoIsThisFor: [
        "Aspiring care agency owners ready to enter the healthcare sector",
        "Healthcare professionals transitioning to business ownership",
        "Existing care agencies seeking growth and expansion strategies",
        "International entrepreneurs establishing UK care businesses",
        "Anyone passionate about making a difference in elderly and disability care",
        "Business owners navigating CQC registration for the first time",
        "Care providers wanting to win more contracts and clients",
      ],
      process: [
        {
          step: 1,
          title: "Initial Assessment & Planning",
          description:
            "We assess your goals, experience level, and specific needs to recommend the perfect resources and create a customized roadmap for your care agency journey.",
        },
        {
          step: 2,
          title: "Foundation Building",
          description:
            "Access comprehensive guides to establish your business structure, understand legal requirements, and prepare for CQC registration with complete documentation support.",
        },
        {
          step: 3,
          title: "Registration & Compliance",
          description:
            "Navigate the CQC registration process confidently with step-by-step guidance, compliance checklists, and expert support to ensure successful approval.",
        },
        {
          step: 4,
          title: "Client Acquisition & Growth",
          description:
            "Implement proven strategies to attract clients, win contracts with local authorities and private clients, and establish your reputation in the care sector.",
        },
        {
          step: 5,
          title: "Ongoing Support & Scaling",
          description:
            "Receive continued guidance as you grow your agency, with strategies for team building, operational excellence, and sustainable expansion in the care industry.",
        },
      ],
    },
  },
  {
    slug: "study-in-uk-education-guidance",
    title: "Study in the UK – Education Guidance",
    shortDescription:
      "Your complete guide to studying in the UK as an international student, from university selection to settling in and thriving.",
    description:
      "Make your UK study dreams a reality with expert guidance through every step of your educational journey. From selecting the perfect university to navigating visa processes and settling into UK student life, we provide comprehensive support to ensure your success.",
    icon: "GraduationCap",
    products: [
      {
        id: "international-student-guide",
        name: "The Human Guide to Moving to the UK as an International Student",
        description:
          "Real, practical advice on studying, settling, and succeeding in the UK — written for real students by real people.",
        price: 30,
        currency: "USD",
        planId: "plan_wZ2R34c2bpYCB",
        downloadLink:
          "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/The_Human_Guide_to_Moving_to_the_UK_as_an_International_Student_lsrpv0.odt",
        featured: true,
        isConsultation: false,
      },
    ],
    features: [
      "University Selection",
      "Application Support",
      "Visa Guidance",
      "Student Life Preparation",
    ],
    color: "from-violet-500 to-purple-600",
    gradient: "bg-linear-to-br from-violet-500/10 to-purple-600/10",
    imageUrl:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    gridImageUrl:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    detailedContent: {
      overview:
        "Studying in the UK opens doors to world-class education, global career opportunities, and life-changing experiences. However, the journey from application to settling in can feel overwhelming without proper guidance. Our Study in the UK Education Guidance provides practical, real-world advice from those who've walked the path before you. This isn't generic information—it's honest, human insights into what it really takes to thrive as an international student in the UK.",
      benefits: [
        "Navigate the UK student visa process with confidence and clarity",
        "Make informed decisions about university and course selection",
        "Avoid common pitfalls that international students face",
        "Learn practical budgeting and money management for UK student life",
        "Understand UK academic culture and expectations from day one",
        "Access insider tips on accommodation, transportation, and daily living",
        "Build a support network and integrate into UK student communities",
        "Set yourself up for academic success and career opportunities",
      ],
      whatYouGet: [
        "Comprehensive guide covering the entire international student journey",
        "University selection framework aligned with your goals and budget",
        "Application and admission process demystified with practical examples",
        "Student visa application guidance with document checklists",
        "Pre-departure preparation checklist and packing essentials",
        "Accommodation search strategies and what to expect",
        "Budgeting templates and cost-of-living breakdowns for major UK cities",
        "Cultural adaptation guide to UK academic and social norms",
        "Part-time work opportunities and regulations for international students",
        "Healthcare, banking, and essential services setup guide",
        "Academic success strategies including study techniques and support resources",
        "Post-graduation pathways including Graduate visa options",
      ],
      whoIsThisFor: [
        "International students planning to study in the UK for the first time",
        "High school graduates seeking undergraduate programs abroad",
        "Professionals pursuing postgraduate degrees in the UK",
        "Parents supporting their children's UK education journey",
        "Anyone feeling overwhelmed by the UK student visa and application process",
        "Students wanting insider knowledge beyond official university websites",
      ],
      process: [
        {
          step: 1,
          title: "Dream & Discover",
          description:
            "Access our comprehensive guide to understand what studying in the UK entails, explore university options, and clarify your academic and career goals.",
        },
        {
          step: 2,
          title: "Apply & Prepare",
          description:
            "Follow our proven application strategies, prepare strong submissions, and navigate the student visa process with detailed, step-by-step guidance.",
        },
        {
          step: 3,
          title: "Arrive & Settle",
          description:
            "Use our pre-departure checklist and arrival guide to settle smoothly into UK life, from finding accommodation to opening bank accounts and registering with essential services.",
        },
        {
          step: 4,
          title: "Thrive & Excel",
          description:
            "Implement our academic success strategies, build meaningful connections, and make the most of your UK student experience while preparing for your future career.",
        },
        {
          step: 5,
          title: "Graduate & Progress",
          description:
            "Explore post-graduation pathways including the Graduate visa, job search strategies, and options for building your career in the UK or internationally.",
        },
      ],
    },
  },
  {
    slug: "cv-tailoring-uk-jobs",
    title: "CV Tailoring for UK Jobs",
    shortDescription:
      "Stand out in the UK job market with professionally tailored CVs, visa sponsorship guidance, and insider access to UK employers.",
    description:
      "Navigate the competitive UK job market with confidence. Our expert CV tailoring service ensures your application passes ATS systems, impresses hiring managers, and opens doors to UK employers who can sponsor your visa.",
    icon: "FileText",
    products: [
      {
        id: "uk-sponsor-companies",
        name: "How to Find UK Companies That Can Sponsor Skilled Workers",
        description:
          "Discover where and how to find legitimate UK sponsors to support your Skilled Worker visa application.",
        price: 20,
        currency: "USD",
        planId: "plan_CokQuD4loNWSS",
        downloadLink:
          "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/How_to_Find_UK_Companies_That_Can_Sponsor_Skilled_Workers_dzhzsb.odt",
        featured: true,
        isConsultation: false,
      },
      {
        id: "cv-tailoring-service",
        name: "Tailored CV Service to Meet UK Employers' Standards",
        description:
          "Get a professionally crafted CV that matches UK recruitment expectations and makes you stand out.",
        price: 25,
        currency: "USD",
        planId: "plan_srgDt4d7KHsZ3",
        downloadLink:
          "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/How_to_Find_UK_Companies_That_Can_Sponsor_Skilled_Workers_dzhzsb.odt",
        featured: true,
        isConsultation: false,
      },
      {
        id: "sponsor-workers-list",
        name: "Worker & Temporary Workers List",
        description:
          "Access the UK Home Office Register of Sponsors (public data), compiled for your convenience.",
        price: 1,
        currency: "USD",
        planId: "plan_UaUV6tSssev8I",
        downloadLink:
          "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/How_to_Find_UK_Companies_That_Can_Sponsor_Skilled_Workers_dzhzsb.odt",
        featured: true,
        isConsultation: false,
      },
    ],
    features: [
      "UK-Specific CV Formatting",
      "ATS Optimization",
      "Visa Sponsorship Guidance",
      "Employer Database Access",
    ],
    color: "from-purple-500 to-pink-600",
    gradient: "bg-linear-to-br from-purple-500/10 to-pink-600/10",
    imageUrl:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    gridImageUrl:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    detailedContent: {
      overview:
        "Landing your dream job in the UK requires more than just experience—it requires a CV that speaks the language of UK recruiters, passes through Applicant Tracking Systems (ATS), and positions you as the ideal candidate. For international professionals, understanding which UK employers can sponsor your visa is equally crucial. Our CV Tailoring for UK Jobs service combines expert CV crafting with strategic visa sponsorship guidance to maximize your chances of securing UK employment.",
      benefits: [
        "Increased interview callbacks by presenting your experience effectively",
        "ATS-optimized formatting ensures your CV gets seen by human recruiters",
        "UK-compliant structure and terminology that resonates with employers",
        "Strategic targeting of visa-sponsoring employers for international candidates",
        "Access to verified UK sponsor database for efficient job searching",
        "Professional presentation that showcases your unique value proposition",
        "Confidence in your applications with expert-reviewed materials",
        "Time savings by focusing on the right opportunities",
      ],
      whatYouGet: [
        "Comprehensive guide to finding UK visa-sponsoring employers",
        "Access to compiled UK Home Office Register of Sponsors",
        "Professional CV tailoring service with UK market expertise",
        "ATS optimization to pass automated screening systems",
        "Achievement-focused content highlighting measurable results",
        "Industry-specific keyword integration for your target roles",
        "UK format conversion with proper structure and terminology",
        "Cover letter template tailored to UK expectations",
        "LinkedIn profile optimization recommendations",
        "Job application strategy specifically for visa sponsorship",
        "Email templates for approaching potential sponsors",
        "Interview preparation tips for UK employers",
      ],
      whoIsThisFor: [
        "International professionals seeking UK employment with visa sponsorship",
        "Skilled workers eligible for UK Skilled Worker visa",
        "Recent graduates looking to start their UK career",
        "Career changers pivoting to new industries in the UK",
        "Professionals struggling to get interview callbacks",
        "Anyone needing to understand the UK sponsorship landscape",
        "Job seekers wanting to maximize their application success rate",
      ],
      process: [
        {
          step: 1,
          title: "Understand Your Market",
          description:
            "Access our comprehensive guide on finding UK visa-sponsoring employers, understanding the sponsorship landscape, and identifying target companies in your industry.",
        },
        {
          step: 2,
          title: "CV Transformation",
          description:
            "Receive professionally tailored CV services that transform your existing CV into a UK-format, ATS-optimized document that highlights your strengths and appeals to UK recruiters.",
        },
        {
          step: 3,
          title: "Strategic Application",
          description:
            "Use our sponsor database and application strategies to target the right employers efficiently, focusing your energy on opportunities with genuine sponsorship potential.",
        },
        {
          step: 4,
          title: "Stand Out & Succeed",
          description:
            "Apply with confidence using your optimized CV, tailored cover letters, and strategic approach to secure interviews with UK employers who value your skills.",
        },
        {
          step: 5,
          title: "Interview & Offer",
          description:
            "Prepare for UK interviews with our guidance, negotiate effectively, and navigate the sponsorship process from job offer to visa approval.",
        },
      ],
    },
  },
  {
    slug: "social-media-management-website-development",
    title: "Social Media Management & Website Development",
    shortDescription:
      "Transform your digital presence with expert social media strategies, stunning websites, and comprehensive coaching for online success.",
    description:
      "Build a powerful online presence that drives real business results. From professional website design to strategic social media management and hands-on coaching, we create cohesive digital experiences that engage your audience and accelerate growth.",
    icon: "Globe",
    products: [
      {
        id: "social-media-management",
        name: "Social Media Management",
        description:
          "Professional social media strategy, content creation, and community management to build your brand and engage your audience across platforms.",
        price: 25,
        currency: "USD",
        planId: "plan_umqjk0mAG3c8o",
        downloadLink:
          "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/How_to_Find_UK_Companies_That_Can_Sponsor_Skilled_Workers_dzhzsb.odt",
        featured: true,
        isConsultation: false,
      },
      {
        id: "website-design-development",
        name: "Website Design & Development",
        description:
          "Custom, responsive website design and development that showcases your brand beautifully and converts visitors into customers. Book a consultation for only 1 USD to get started.",
        price: 1,
        currency: "USD",
        planId: "plan_pq5A3m2Y4usvS",
        featured: true,
        isConsultation: true,
      },
      {
        id: "software-engineering-coaching",
        name: "Software Engineering Coaching",
        description:
          "One-on-one coaching to level up your coding skills, master modern development practices, and advance your software engineering career.",
        price: 100,
        currency: "USD",
        planId: "plan_Y0GWEMpffwDz1",
        downloadLink:
          "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/How_to_Find_UK_Companies_That_Can_Sponsor_Skilled_Workers_dzhzsb.odt",
        featured: true,
        isConsultation: false,
      },
    ],
    features: [
      "Social Media Strategy",
      "Custom Website Design",
      "Development Coaching",
      "Brand Consistency",
    ],
    color: "from-cyan-500 to-blue-600",
    gradient: "bg-linear-to-br from-cyan-500/10 to-blue-600/10",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    gridImageUrl:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
    detailedContent: {
      overview:
        "In today's digital-first world, your online presence is your business card, storefront, and reputation all rolled into one. Our Social Media Management & Website Development service provides comprehensive solutions to establish, enhance, and optimize your digital footprint. Whether you need ongoing social media management, a stunning new website, or personalized coaching to develop your technical skills, we deliver results that matter. We combine strategic thinking with creative execution to build digital experiences that resonate with your audience and drive measurable business growth.",
      benefits: [
        "Establish credibility with a professional, modern online presence",
        "Reach and engage your target audience effectively on social platforms",
        "Convert website visitors into customers with optimized design",
        "Save time by outsourcing your digital management to experts",
        "Build consistent brand messaging across all digital touchpoints",
        "Stay ahead of competitors with cutting-edge digital strategies",
        "Gain technical skills through personalized coaching sessions",
        "Track measurable results with analytics and performance insights",
      ],
      whatYouGet: [
        "Professional social media strategy and content planning",
        "Custom graphics, videos, and engaging content creation",
        "Daily posting, community management, and audience engagement",
        "Responsive website design tailored to your brand identity",
        "Modern, fast-loading development with SEO optimization",
        "Mobile-first approach ensuring perfect experience on all devices",
        "Content management system for easy updates",
        "One-on-one software engineering coaching sessions",
        "Code reviews and best practices guidance",
        "Career development strategies for software engineers",
        "Monthly analytics reports tracking growth and engagement",
        "Ongoing support and optimization based on performance data",
      ],
      whoIsThisFor: [
        "Small business owners establishing their digital presence",
        "Entrepreneurs launching new ventures online",
        "Established businesses needing digital transformation",
        "Service providers wanting to attract clients through digital channels",
        "Aspiring developers seeking mentorship and skill development",
        "Professionals transitioning into software engineering careers",
        "Anyone wanting to leverage digital platforms for business growth",
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Strategy",
          description:
            "We start with an in-depth consultation to understand your brand, goals, target audience, and competitive landscape. Together, we develop a comprehensive digital strategy aligned with your business objectives.",
        },
        {
          step: 2,
          title: "Design & Development",
          description:
            "Our team creates stunning website designs and begins development while simultaneously setting up and optimizing your social media profiles. For coaching clients, we assess your current skills and create a personalized learning roadmap.",
        },
        {
          step: 3,
          title: "Content Creation & Launch",
          description:
            "We develop engaging content calendars, create professional graphics and copy, and prepare your digital assets. Your website undergoes rigorous testing before launch to ensure flawless performance.",
        },
        {
          step: 4,
          title: "Execution & Engagement",
          description:
            "Launch your website and social media campaigns with strategic execution. We manage daily posting, community engagement, and respond to your audience while you focus on running your business.",
        },
        {
          step: 5,
          title: "Optimize & Grow",
          description:
            "Continuously monitor performance, analyze data, and optimize strategies for better results. Regular reporting keeps you informed while we handle the ongoing management and improvements.",
        },
      ],
    },
  },
  {
    slug: "business-startup-growth-support",
    title: "Business Start-Up & Growth Support",
    shortDescription:
      "Launch and scale your UK business with expert guidance, from company registration to growth strategies and operational excellence.",
    description:
      "Turn your business idea into reality with our comprehensive start-up and growth support program. From legal registration to strategic planning and scaling, we guide you through every step of building a successful UK business.",
    icon: "TrendingUp",
    products: [
      {
        id: "uk-business-registration",
        name: "How to Register Your Business in the UK",
        description:
          "A beginner-friendly guide that walks you through the exact steps to legally register and launch your UK business.",
        price: 7.5,
        currency: "USD",
        planId: "plan_Yrm3hbvImffHH",
        downloadLink:
          "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/How_to_Find_UK_Companies_That_Can_Sponsor_Skilled_Workers_dzhzsb.odt",
        featured: true,
        isConsultation: false,
      },
    ],
    features: [
      "Business Registration",
      "Legal Compliance",
      "Growth Strategies",
      "Operational Setup",
    ],
    color: "from-green-500 to-emerald-600",
    gradient: "bg-linear-to-br from-green-500/10 to-emerald-600/10",
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    gridImageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    detailedContent: {
      overview:
        "Starting a business in the UK doesn't have to be overwhelming or confusing. Our Business Start-Up & Growth Support provides clear, actionable guidance to help you navigate the registration process, understand your legal obligations, and establish a solid foundation for your venture. Whether you're a first-time entrepreneur or an experienced business owner expanding into the UK market, we simplify the complex and give you the confidence to move forward with your business dreams.",
      benefits: [
        "Avoid costly mistakes by following proven registration processes",
        "Save time with step-by-step guidance that cuts through confusion",
        "Understand legal requirements and compliance from day one",
        "Choose the right business structure for your specific needs",
        "Gain clarity on taxes, licenses, and regulatory obligations",
        "Set up proper financial systems and record-keeping from the start",
        "Access templates and resources to streamline your setup",
        "Build a legitimate, compliant business foundation for growth",
      ],
      whatYouGet: [
        "Complete business registration walkthrough for UK companies",
        "Comparison of business structures (Sole Trader, Limited Company, Partnership)",
        "Step-by-step Companies House registration guide",
        "Tax registration guidance (HMRC, VAT, PAYE)",
        "Legal compliance checklist for your industry",
        "Business license and permit requirements breakdown",
        "Business banking setup recommendations",
        "Accounting and bookkeeping system setup guidance",
        "Insurance requirements and provider recommendations",
        "Brand protection advice including trademark basics",
        "Essential business templates and documents",
        "Post-registration checklist to ensure nothing is missed",
      ],
      whoIsThisFor: [
        "First-time entrepreneurs ready to start their UK business",
        "Sole traders wanting to formalize their operations",
        "International entrepreneurs establishing UK presence",
        "Freelancers transitioning to legitimate business structures",
        "Side hustlers ready to make their venture official",
        "Anyone confused by UK business registration requirements",
        "Entrepreneurs wanting to ensure legal compliance from day one",
      ],
      process: [
        {
          step: 1,
          title: "Understand Your Options",
          description:
            "Learn about different business structures available in the UK and determine which option best suits your business goals, liability concerns, and tax considerations.",
        },
        {
          step: 2,
          title: "Prepare & Register",
          description:
            "Follow our detailed guide to gather required information, complete registration with Companies House, and establish your legal business entity in the UK.",
        },
        {
          step: 3,
          title: "Tax & Compliance Setup",
          description:
            "Register with HMRC for appropriate taxes, understand your obligations, and set up systems to maintain compliance with UK business regulations.",
        },
        {
          step: 4,
          title: "Operational Foundation",
          description:
            "Establish essential business operations including business banking, accounting systems, insurance coverage, and necessary licenses for your industry.",
        },
        {
          step: 5,
          title: "Launch & Grow",
          description:
            "With your business properly registered and compliant, focus on marketing, sales, and growth while maintaining the strong foundation you've built.",
        },
      ],
    },
  },
  {
    slug: "cleaning-business-coaching",
    title: "Cleaning Business Coaching",
    shortDescription:
      "Launch and scale a profitable cleaning business in the UK with proven strategies, operational blueprints, and expert coaching.",
    description:
      "Break into the lucrative cleaning industry with specialized coaching tailored for cleaning business owners. From start-up essentials to scaling strategies, we provide the frameworks, systems, and support you need to build a thriving cleaning company in the competitive UK market.",
    icon: "Sparkles",
    products: [
      {
        id: "scale-cleaning-business",
        name: "Scale Your Cleaning Business in the UK: A Real Human Blueprint",
        description:
          "Learn how to expand your cleaning business, attract more clients, and build a reliable team using proven strategies.",
        price: 60,
        currency: "USD",
        planId: "plan_8CUaOB7ziZkt2",
        downloadLink:
          "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/Scale_Your_Cleaning_Business_in_the_UK_-_A_Real_Human_Blueprint_t5bwfp.odt",
        featured: true,
        isConsultation: false,
      },
      {
        id: "start-cleaning-company",
        name: "Start Your Successful Cleaning Company",
        description:
          "Get the full step-by-step guide to launching a profitable cleaning company in the UK; from setup to scaling.",
        price: 50,
        currency: "USD",
        planId: "plan_3FJqmgzoocC4E",
        downloadLink:
          "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/How_to_Find_UK_Companies_That_Can_Sponsor_Skilled_Workers_dzhzsb.odt",
        featured: true,
        isConsultation: false,
      },
    ],
    features: [
      "Business Setup Guide",
      "Client Acquisition Strategies",
      "Operations Management",
      "Scaling & Team Building",
    ],
    color: "from-yellow-500 to-orange-600",
    gradient: "bg-linear-to-br from-yellow-500/10 to-orange-600/10",
    imageUrl:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    gridImageUrl:
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
    detailedContent: {
      overview:
        "The UK cleaning industry is worth billions and continues to grow year after year, offering incredible opportunities for entrepreneurs willing to put in the work. Our Cleaning Business Coaching program provides specialized guidance, proven systems, and actionable strategies to help you build a profitable cleaning business from the ground up—or take your existing operation to new heights. Whether you're starting with zero experience or looking to scale beyond your current capacity, we give you the blueprint that successful cleaning business owners use to thrive in this recession-proof industry.",
      benefits: [
        "Enter a recession-proof industry with consistent, year-round demand",
        "Start with relatively low investment compared to other businesses",
        "Build a scalable business model that grows at your pace",
        "Achieve flexible working hours and better work-life balance",
        "Create multiple revenue streams across residential and commercial sectors",
        "Develop systems that allow your business to run without you",
        "Generate reliable income and potential for significant growth",
        "Make a positive impact by providing essential services to your community",
      ],
      whatYouGet: [
        "Complete step-by-step guide to starting your cleaning business",
        "Proven scaling strategies used by successful UK cleaning companies",
        "Client acquisition blueprint with marketing templates and scripts",
        "Pricing calculator and profitability models for different service types",
        "Operations manual with checklists and standard operating procedures",
        "Staff recruitment, training, and management frameworks",
        "Equipment and supply sourcing guide with trusted supplier recommendations",
        "Service packages and upselling strategies to maximize revenue",
        "Quality control systems and customer satisfaction protocols",
        "Insurance, licensing, and legal compliance guidance",
        "Contract templates for clients and staff agreements",
        "Time management and scheduling optimization tools",
      ],
      whoIsThisFor: [
        "Aspiring entrepreneurs looking to start a cleaning business with minimal investment",
        "Existing cleaning business owners ready to scale and grow",
        "Individuals seeking a flexible, recession-proof business opportunity",
        "Stay-at-home parents wanting to build income around family commitments",
        "Anyone passionate about building a service-based business",
        "Immigrants and new UK residents seeking business opportunities",
        "People wanting to transition from employment to business ownership",
      ],
      process: [
        {
          step: 1,
          title: "Foundation & Setup",
          description:
            "Access our comprehensive guides to establish your cleaning business legally, choose your niche (residential, commercial, or specialized), register your business, and set up essential systems from day one.",
        },
        {
          step: 2,
          title: "Operations & Systems",
          description:
            "Develop efficient operational systems, create compelling service packages, establish competitive pricing strategies, and implement quality control processes that ensure consistent excellence.",
        },
        {
          step: 3,
          title: "Client Acquisition",
          description:
            "Implement proven marketing strategies to attract your first clients through local advertising, digital marketing, networking, and referral systems that generate steady business flow.",
        },
        {
          step: 4,
          title: "Service Delivery & Excellence",
          description:
            "Master efficient cleaning techniques, manage client relationships professionally, handle feedback constructively, and ensure consistent service quality that turns clients into loyal advocates.",
        },
        {
          step: 5,
          title: "Growth & Team Expansion",
          description:
            "Scale your business strategically by hiring and training reliable staff, automating operations, expanding service offerings, and building a business that generates income beyond your personal time investment.",
        },
      ],
    },
  },

  {
    slug: "book-a-consultation",
    title: "Book A Consultation",
    shortDescription:
      "Schedule a personalized 1-hour Zoom consultation at your convenience. Get expert guidance tailored to your unique goals and challenges.",
    description:
      "Gain direct access to our expertise with a comprehensive one-on-one Zoom consultation. After payment, use our Calendly link to schedule your 1-hour session at a time that suits you. Whether you need guidance on any of our services or have unique questions, we'll provide actionable insights to help you make informed decisions and move forward with confidence on your UK journey.",
    icon: "Calendar",
    products: [
      {
        id: "one-on-one-consultation",
        name: "One-on-One Expert Consultation",
        description:
          "Book a personalized 60-minute Zoom consultation to discuss your goals, challenges, and get tailored advice from our experts.",
        price: 20,
        currency: "USD",
        planId: "plan_iQJSZuBZvIEXk",
        featured: true,
        isConsultation: true,
      },
    ],
    features: [
      "1-Hour Zoom Session",
      "Schedule Anytime via Calendly",
      "Personalized Expert Guidance",
      "Tailored Action Plan",
    ],
    color: "from-teal-500 to-cyan-600",
    gradient: "bg-linear-to-br from-teal-500/10 to-cyan-600/10",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    gridImageUrl:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    detailedContent: {
      overview:
        "Sometimes you need direct, personalized guidance to navigate your unique situation effectively. Our Book A Consultation service gives you exclusive one-on-one access to our team of experts for a comprehensive 60-minute Zoom session. Pay once, receive your Calendly booking link instantly, and schedule your consultation at any time that works for you—whether that's next week or next month. Whether you're exploring our services, have specific questions about your UK journey, or need strategic insights for your business or career, this consultation provides the clarity, direction, and actionable advice you need to move forward with confidence.",
      benefits: [
        "Convenient Zoom meeting accessible from anywhere in the world",
        "Complete scheduling flexibility—book at any time that suits you",
        "Get personalized advice tailored specifically to your situation",
        "Discuss any of our services or explore multiple options in one session",
        "Receive expert insights and strategic recommendations you can act on",
        "Ask questions freely in a judgment-free, supportive environment",
        "Leave with a clear, customized action plan for your next steps",
        "Save time and money by getting focused guidance in one intensive session",
      ],
      whatYouGet: [
        "60-minute one-on-one Zoom video consultation with an expert",
        "Calendly booking link sent immediately after payment confirmation",
        "Complete freedom to schedule your session at your preferred date and time",
        "Pre-consultation questionnaire to maximize the value of your session",
        "Personalized discussion covering your specific needs, goals, and challenges",
        "Expert insights and recommendations from experienced consultants",
        "Customized action plan with clear next steps tailored to your situation",
        "Resource recommendations and tools specific to your needs",
        "Session notes and key takeaways emailed after the meeting",
        "48-hour follow-up email support for clarifying questions",
        "Optional session recording available upon request",
      ],
      whoIsThisFor: [
        "Anyone exploring our services and wanting personalized guidance before committing",
        "Professionals with unique situations requiring tailored, expert advice",
        "Entrepreneurs needing strategic direction for UK business ventures",
        "Individuals wanting to validate their plans before taking major action",
        "Anyone who values expert insights before making important life decisions",
        "People seeking clarity on the best path forward for their specific goals",
        "Busy professionals who need flexible scheduling and focused guidance",
      ],
      process: [
        {
          step: 1,
          title: "Complete Your Payment",
          description:
            "Purchase your consultation session securely through our payment system. Once payment is confirmed, you'll immediately receive your unique Calendly booking link via email.",
        },
        {
          step: 2,
          title: "Schedule at Your Convenience",
          description:
            "Use your personalized Calendly link to browse available time slots and choose any date and time that works perfectly for your schedule. Select a slot that fits your timezone and preferences—you have complete flexibility to book when it suits you best.",
        },
        {
          step: 3,
          title: "Complete Pre-Consultation Form",
          description:
            "After booking your time slot, fill out a brief questionnaire about your background, current situation, goals, and specific questions you'd like to address. This preparation ensures we maximize the value and impact of your consultation session.",
        },
        {
          step: 4,
          title: "Join Your Zoom Consultation",
          description:
            "At your scheduled time, join the Zoom meeting using the link provided in your confirmation email. Engage in an in-depth, personalized discussion with our expert consultant who will address your questions, provide tailored guidance, and help you develop a clear action plan.",
        },
        {
          step: 5,
          title: "Receive Your Action Plan & Take Action",
          description:
            "After the session concludes, receive a comprehensive summary email with key takeaways, your personalized action plan, recommended resources, and next steps. You'll also have 48 hours of follow-up email support for any clarifying questions that arise as you begin implementing your plan.",
        },
      ],
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}

export function getProductByPlanId(planId: string): Product | undefined {
  for (const service of servicesData) {
    const product = service.products.find((p) => p.planId === planId);
    if (product) {
      return product;
    }
  }
  return undefined;
}

export function getServiceByPlanId(planId: string): ServiceData | undefined {
  return servicesData.find((service) =>
    service.products.some((p) => p.planId === planId)
  );
}
