export type Skill = {
    name: string;
    icon?: string;
    category:
        | "Languages"
        | "AI/ML & GenAI"
        | "Backend & Systems"
        | "DevOps & Cloud"
        | "Databases"
        | "Core Strengths";
};

export type Experience = {
    title: string;
    company: string;
    duration: string;
    location?: string;
    logo: string;
    summary: string;
    bullets: string[];
    technologies: string[];
    type: "current" | "past";
};

export type Project = {
    title: string;
    tagline: string;
    description: string;
    technologies: string[];
    image: string;
    demo: string;
    source: string;
    featured: boolean;
    metric?: string;
};

export const portfolioData = {
    personal: {
        name: "Shailesh Singh",
        handle: "shailesh_singh@zykrr",
        title: "AI Engineer · Real-time AI Systems",
        subtitle:
            "Building real-time AI: distributed CX pipelines, low-latency voice agents, and LLM-driven analytics at production scale.",
        bio: "I'm an AI Engineer at Zykrr where I design real-time systems that turn live customer feedback into structured insight. My day-to-day spans Apache Kafka pipelines moving 34.56M+ events/day from PostgreSQL to ClickHouse, LLM-powered analytics (text mining, issue detection, summarization), AI-driven survey builders, and low-latency STT → LLM → TTS voice agents on LiveKit. I lean toward fault-tolerant design — Kubernetes, DLQs, recovery — and care about latency, accuracy, and what happens when production breaks at 3am.",
        email: "ss.forcoding@gmail.com",
        phone: "+91-6201237193",
        location: "Gurgaon, Haryana, India",
        resume:
            "https://drive.google.com/file/d/19iYfN0EjPmNk-6KZwG6nkBUv1ra3CSoW/view?usp=sharing",
        social: {
            github: "https://github.com/shailesh-singh-ss",
            linkedin: "https://www.linkedin.com/in/shailesh-singh-544bb3229",
            portfolio: "https://www.shaileshsingh.tech/",
        },
    },

    impact: [
        {
            metric: "34.56M+",
            label: "events/day",
            sub: "Kafka · Postgres → ClickHouse",
        },
        {
            metric: "STT → LLM → TTS",
            label: "voice pipelines",
            sub: "low-latency on LiveKit",
        },
        {
            metric: "K8s",
            label: "distributed scaling",
            sub: "Kafka consumers · HA",
        },
        {
            metric: "DLQ",
            label: "fault tolerance",
            sub: "recovery · production debugging",
        },
    ],

    about: {
        intro:
            "AI engineer with a systems mindset. I build real-time AI infrastructure — from streaming pipelines to LLM analytics to conversational voice agents — and I'm happiest when latency, correctness, and resilience all have to hold at once.",
        tags: [
            { label: "ai/ml", description: "LLMs · RAG · LangChain · agents" },
            { label: "real-time", description: "Kafka · ClickHouse · LiveKit" },
            { label: "distributed", description: "Kubernetes · MSK · async" },
            { label: "production", description: "DLQ · debugging · observability" },
        ],
        image: "/assets/hero/heroImage.png",
    },

    education: [
        {
            school: "Institute of Engineering and Technology, Lucknow",
            degree: "B.Tech, Computer Science and Engineering",
            cgpa: "8.04 / 10",
            duration: "Oct 2021 — Jun 2025",
            location: "Lucknow, U.P., India",
        },
    ],

    experience: [
        {
            title: "AI Engineer",
            company: "Zykrr",
            duration: "Sep 2025 — Present",
            location: "Remote · India",
            logo: "/assets/experience/zykrr.png",
            summary:
                "Real-time CX systems — from Kafka pipelines to LLM analytics to voice agents.",
            bullets: [
                "Designed and scaled real-time CX data pipelines on Apache Kafka (MSK), transforming 34.56M+ events/day from PostgreSQL → ClickHouse.",
                "Built LLM-driven CX analytics: text analytics, issue detection, summarization, and automated insight generation over large-scale feedback data.",
                "Developed a real-time CX chatbot for qualitative + quantitative feedback exploration with dynamic insight generation, visualization, and sentiment trends.",
                "Engineered an AI-powered survey builder that uses historical data and user context to dynamically generate customized surveys, cutting manual configuration effort.",
                "Implemented real-time voice + chat survey systems with adaptive conversational flows where survey paths shift based on user responses (conditional logic).",
                "Designed low-latency STT → LLM → TTS pipelines on LiveKit, optimizing for latency, cost, accuracy, and noise robustness in real-time conversational environments.",
                "Managed distributed systems on Kubernetes — scaling Kafka consumers, secrets handling, HA, fault isolation, production-grade reliability.",
                "Built fault-tolerant pipelines with DLQ handling and recovery; debugged production issues across streaming systems, AI services, and databases.",
            ],
            technologies: [
                "Python",
                "Apache Kafka",
                "ClickHouse",
                "PostgreSQL",
                "Kubernetes",
                "AWS MSK",
                "LiveKit",
                "LangChain",
                "FastAPI",
                "Docker",
            ],
            type: "current" as const,
        },
        {
            title: "Gen AI Intern",
            company: "Tap Health",
            duration: "Jul 2024 — Feb 2025",
            location: "Remote",
            logo: "/assets/experience/taphealth.png",
            summary:
                "AI-driven healthcare systems for personalized diabetes coaching.",
            bullets: [
                "Engineered AI-driven healthcare systems delivering personalized diabetes coaching using LLM-based architectures.",
                "Built scalable AI pipelines using Python, LangChain, Hugging Face, and Neo4j knowledge graphs.",
                "Developed multilingual AI systems integrating speech and text models for improved accessibility.",
                "Enhanced response quality through prompt engineering and contextual modeling.",
            ],
            technologies: [
                "Python",
                "LangChain",
                "Hugging Face",
                "PyTorch",
                "Neo4j",
                "FastAPI",
                "Docker",
                "Azure",
            ],
            type: "past" as const,
        },
    ] as Experience[],

    skills: [
        // Languages
        { name: "Python", icon: "/assets/skills/python.png", category: "Languages" },
        { name: "C/C++", icon: "/assets/skills/c++.png", category: "Languages" },
        { name: "JavaScript", icon: "/assets/skills/JavaScript.png", category: "Languages" },
        { name: "TypeScript", icon: "/assets/skills/TypeScript.png", category: "Languages" },
        { name: "SQL", icon: "/assets/skills/sql.png", category: "Languages" },

        // AI/ML & GenAI
        { name: "LLMs", category: "AI/ML & GenAI" },
        { name: "RAG Pipelines", category: "AI/ML & GenAI" },
        { name: "Prompt Engineering", category: "AI/ML & GenAI" },
        { name: "LangChain", icon: "/assets/skills/langchain.png", category: "AI/ML & GenAI" },
        { name: "CrewAI", icon: "/assets/skills/crewai.png", category: "AI/ML & GenAI" },
        { name: "LangGraph", icon: "/assets/skills/langgraph.png", category: "AI/ML & GenAI" },
        { name: "Hugging Face", icon: "/assets/skills/huggingface.png", category: "AI/ML & GenAI" },
        { name: "PyTorch", icon: "/assets/skills/PyTorch.png", category: "AI/ML & GenAI" },
        { name: "Conversational AI", category: "AI/ML & GenAI" },
        { name: "Text Analytics", category: "AI/ML & GenAI" },

        // Backend & Systems
        { name: "FastAPI", icon: "/assets/skills/fastapi.png", category: "Backend & Systems" },
        { name: "Node.js", icon: "/assets/skills/node.png", category: "Backend & Systems" },
        { name: "Distributed Systems", category: "Backend & Systems" },
        { name: "Microservices", category: "Backend & Systems" },
        { name: "REST APIs", category: "Backend & Systems" },
        { name: "Async Processing", category: "Backend & Systems" },
        { name: "Apache Kafka", category: "Backend & Systems" },

        // DevOps & Cloud
        { name: "Docker", icon: "/assets/skills/Docker.png", category: "DevOps & Cloud" },
        { name: "Kubernetes", category: "DevOps & Cloud" },
        { name: "AWS MSK", category: "DevOps & Cloud" },
        { name: "AWS IAM", category: "DevOps & Cloud" },
        { name: "Azure", icon: "/assets/skills/Azure.png", category: "DevOps & Cloud" },
        { name: "GCP", icon: "/assets/skills/Google Cloud.png", category: "DevOps & Cloud" },
        { name: "LiveKit", category: "DevOps & Cloud" },
        { name: "CI/CD", category: "DevOps & Cloud" },

        // Databases
        { name: "ClickHouse", category: "Databases" },
        { name: "PostgreSQL", icon: "/assets/skills/PostgresSQL.png", category: "Databases" },
        { name: "MongoDB", icon: "/assets/skills/mongodb.png", category: "Databases" },
        { name: "ChromaDB", category: "Databases" },
        { name: "Neo4j", category: "Databases" },
        { name: "Vector DBs", icon: "/assets/skills/vectordatabase.png", category: "Databases" },

        // Core Strengths
        { name: "Production Debugging", category: "Core Strengths" },
        { name: "Performance Optimization", category: "Core Strengths" },
        { name: "Real-time Processing", category: "Core Strengths" },
        { name: "Fault-tolerant Systems", category: "Core Strengths" },
        { name: "Scalable System Design", category: "Core Strengths" },
    ] as Skill[],

    achievements: {
        competitive: [
            {
                platform: "Codeforces",
                handle: "Shailesh_21",
                title: "Specialist",
                rating: 1558,
                highlights: [
                    "Global Rank 892 — Round 935 (Div. 3) · 7,200+ participants",
                    "Global Rank 1137 — Round 929 (Div. 3) · 20,000+ participants",
                ],
                link: "https://codeforces.com/profile/Shailesh_21",
                icon: "/assets/history/codeforces.png",
            },
            {
                platform: "LeetCode",
                handle: "shailesh_21",
                title: "Knight",
                rating: 1853,
                highlights: [
                    "Top 5.85% in Global Coders, out of 80,000+ Indian participants",
                    "Global Rank 1336 — Biweekly Contest 126 · 21,000+ participants",
                ],
                link: "https://leetcode.com/u/shailesh_21/",
                icon: "/assets/history/leetcode.png",
            },
            {
                platform: "CodeChef",
                handle: "shailesh_s21",
                title: "4 Star",
                rating: 1844,
                highlights: [
                    "All India Rank 3655 (Global 4686), out of 200,000+ active users",
                    "Global Rank 187 — CodeChef Starters 116 Div 2",
                ],
                link: "https://www.codechef.com/users/shailesh_s21",
                icon: "/assets/history/codechef.png",
            },
        ],
        certifications: [
            {
                title: "Python for Machine Learning",
                issuer: "Udemy",
                date: "2025",
                certificate:
                    "https://drive.google.com/file/d/1avKlC5_X372wHenAGNUMVzTzBD9Vxx3v/view?usp=sharing",
            },
            {
                title: "AI and Big Data Analytics",
                issuer: "L&T Edutech",
                date: "2025",
                certificate:
                    "https://drive.google.com/file/d/1OD5bfwOncG4KtdQhgWJpl3_JPBOwv2sR/view?usp=sharing",
            },
            {
                title: "Prompt Engineering",
                issuer: "AWS",
                date: "2025",
                certificate:
                    "https://drive.google.com/file/d/1ORKuIOsNtYH42AOmh6CELDv-EVROX4pO/view?usp=sharing",
            },
        ],
    },

    projects: [
        {
            title: "StratAGI",
            tagline: "Autonomous Multi-Agent Business Strategy Platform",
            description:
                "A multi-agent AI system using CrewAI for autonomous research and strategy generation workflows. Reduced redundant API calls by 30% through optimized orchestration and shared memory design. Backed by FastAPI services and shipped in containers.",
            technologies: [
                "Python",
                "CrewAI",
                "LangChain",
                "FastAPI",
                "Docker",
                "Streamlit",
            ],
            image: "/assets/projects/stratagi.png",
            demo: "https://github.com/shailesh-singh-ss/StratAGI",
            source: "https://github.com/shailesh-singh-ss/StratAGI",
            featured: true,
            metric: "30% fewer API calls via shared memory orchestration",
        },
        {
            title: "WealthWise",
            tagline: "Full-Stack AI Finance Platform",
            description:
                "A full-stack AI finance platform for automated expense tracking, budgeting, and financial insights. Implements LLM-based receipt parsing to extract structured data from unstructured inputs, with real-time recurring transactions, alerts, and reporting workflows.",
            technologies: [
                "Next.js",
                "Tailwind CSS",
                "Prisma",
                "Clerk",
                "Gemini AI",
                "Vercel",
            ],
            image: "/assets/projects/wealthwise.png",
            demo: "https://wealthwise-six.vercel.app/",
            source: "https://github.com/shailesh-singh-ss/WealthWise",
            featured: true,
            metric: "Receipt → structured JSON via LLM parsing",
        },
        {
            title: "Medical Chatbot",
            tagline: "RAG over GALE Encyclopedia of Medicine",
            description:
                "A medical assistant built with LangChain, ChromaDB, LLaMA2, and Hugging Face. Embeds the GALE encyclopedia, retrieves relevant context, and generates grounded medical suggestions.",
            technologies: ["Python", "LangChain", "ChromaDB", "LLaMA", "Hugging Face"],
            image: "/assets/projects/medical_chatbot_project.png",
            demo: "https://github.com/shailesh-singh-ss/Medical-Chat-Bot",
            source: "https://github.com/shailesh-singh-ss/Medical-Chat-Bot",
            featured: false,
        },
        {
            title: "Leadgen Message",
            tagline: "B2B Lead-Gen with AI Outreach",
            description:
                "Discovers potential customers, analyzes their websites, and generates personalized outreach copy using Google Generative AI behind a FastAPI service.",
            technologies: ["Python", "FastAPI", "BeautifulSoup4", "Google Generative AI"],
            image: "/assets/projects/leadgen.png",
            demo: "https://github.com/shailesh-singh-ss/Leadgen_Message",
            source: "https://github.com/shailesh-singh-ss/Leadgen_Message",
            featured: false,
        },
        {
            title: "MCQ Generator",
            tagline: "PDF/TXT → Editable MCQs",
            description:
                "Upload a document, choose a topic and difficulty, and generate editable multiple-choice questions via LangChain and the Cohere LLM.",
            technologies: ["Python", "LangChain", "Streamlit", "Cohere"],
            image: "/assets/projects/mcq_generator_project.png",
            demo: "https://mcq-generator-n5eewjaorzysa3gvqkjgfh.streamlit.app/",
            source: "https://github.com/shailesh-singh-ss/MCQ-Generator",
            featured: false,
        },
        {
            title: "Blog Platform",
            tagline: "Full-stack Blog with Appwrite",
            description:
                "A blog platform with secure auth and efficient data management — built to practice end-to-end React + Appwrite + Tailwind.",
            technologies: ["React", "Appwrite", "Tailwind", "Redux"],
            image: "/assets/projects/blog_project.png",
            demo: "https://blog-nu-lake-62.vercel.app/",
            source: "https://github.com/shailesh-singh-ss/Blog",
            featured: false,
        },
        {
            title: "YouTube Backend",
            tagline: "Video-platform API in Node",
            description:
                "Backend for a video-hosting site: auth (JWT, refresh tokens), uploads, likes, comments, subscriptions — Express + MongoDB + Mongoose.",
            technologies: ["Node.js", "Express", "MongoDB", "JWT"],
            image: "/assets/projects/project.png",
            demo: "https://github.com/shailesh-singh-ss/Youtube-Backend-Learning",
            source: "https://github.com/shailesh-singh-ss/Youtube-Backend-Learning",
            featured: false,
        },
        {
            title: "Wordle",
            tagline: "Daily Word Game Clone",
            description:
                "A responsive Wordle clone with daily challenges, color-coded feedback, and a polished mobile/desktop experience.",
            technologies: ["JavaScript", "HTML", "CSS"],
            image: "/assets/projects/wordle_project.png",
            demo: "https://wordle-pink-nu.vercel.app/",
            source: "https://github.com/shailesh-singh-ss/Wordle",
            featured: false,
        },
    ] as Project[],

    chatbot: {
        greeting:
            "ai:> hey — I'm Shailesh's portfolio assistant. ask me about his work at Zykrr, his stack, or his projects. ▌",
        context: `You are the assistant on Shailesh Singh's personal portfolio site. Answer concisely (under ~120 words), in clean GitHub-flavored markdown. Stay strictly on topic — Shailesh's professional background, skills, work, projects, education, and contact info. Politely redirect anything else.

# Profile
- Name: Shailesh Singh
- Role: AI Engineer at Zykrr (Sep 2025 — Present)
- Based in: Gurgaon, Haryana, India
- Email: ss.forcoding@gmail.com  ·  Phone: +91-6201237193

# Education
- B.Tech, Computer Science and Engineering — Institute of Engineering and Technology, Lucknow (Oct 2021 — Jun 2025), CGPA 8.04/10.

# Current role — AI Engineer @ Zykrr
- Designs and scales real-time CX data pipelines on Apache Kafka (AWS MSK), moving 34.56M+ events/day from PostgreSQL to ClickHouse.
- Builds LLM-driven CX analytics: text analytics, issue detection, summarization, automated insight generation.
- Developed a real-time CX chatbot for qualitative + quantitative feedback analysis with dynamic insight generation and visualization.
- Engineered an AI-powered survey builder that customizes surveys from historical data + user context.
- Implemented real-time voice + chat survey systems with adaptive conversational flows (conditional logic).
- Designed low-latency STT → LLM → TTS pipelines on LiveKit (latency, cost, accuracy, noise robustness).
- Manages distributed systems on Kubernetes (scaling Kafka consumers, secrets, HA).
- Built fault-tolerant pipelines with DLQ + recovery; debugs production issues across streaming, AI services, and databases.

# Prior — Gen AI Intern @ Tap Health (Jul 2024 — Feb 2025)
- Personalized diabetes coaching using LLM architectures.
- AI pipelines with Python, LangChain, Hugging Face, Neo4j knowledge graphs.
- Multilingual systems integrating speech + text models.
- Prompt engineering and contextual modeling.

# Skills
- **Languages**: Python, C/C++, JavaScript, TypeScript, SQL
- **AI/ML & GenAI**: LLMs, RAG pipelines, Prompt Engineering, LangChain, Hugging Face, PyTorch, Conversational AI, Text Analytics, Classification & Summarization
- **Backend & Systems**: Distributed Systems, Microservices, REST APIs, FastAPI, Scalable System Design, Async Processing, Apache Kafka
- **DevOps & Cloud**: Docker, Kubernetes, AWS (MSK, IAM), Azure, GCP, LiveKit, CI/CD
- **Databases**: ClickHouse, PostgreSQL, MongoDB, ChromaDB, Neo4j, Vector DBs
- **Core Strengths**: Production Debugging, Performance Optimization, Real-time Processing, Fault-tolerant Systems

# Featured Projects
- **StratAGI** — autonomous multi-agent business strategy platform on CrewAI; 30% fewer redundant API calls via shared memory orchestration. Stack: Python, CrewAI, LangChain, FastAPI, Docker. [GitHub](https://github.com/shailesh-singh-ss/StratAGI)
- **WealthWise** — full-stack AI finance platform with LLM receipt parsing. Stack: Next.js, Tailwind, Prisma, Clerk, Gemini AI, Vercel. [Live](https://wealthwise-six.vercel.app/)  ·  [GitHub](https://github.com/shailesh-singh-ss/WealthWise)

# Achievements
- Codeforces Specialist (highest 1558)
- LeetCode Knight (highest 1853)
- CodeChef 4-Star (highest 1844)

# Links
- [Resume](https://drive.google.com/file/d/19iYfN0EjPmNk-6KZwG6nkBUv1ra3CSoW/view)
- [GitHub](https://github.com/shailesh-singh-ss)
- [LinkedIn](https://www.linkedin.com/in/shailesh-singh-544bb3229/)
- [Portfolio](https://www.shaileshsingh.tech)

# Style
- Use markdown headings, bullets, and inline links.
- Prefer concise answers; expand only when asked.
- For "how do I contact him?" → email, LinkedIn, or the contact form on this page.
- Refuse off-topic questions politely.
- Open with a lowercase 'ai:>' prefix line only if the user explicitly greets — otherwise answer directly.
`,
    },
};

export type PortfolioData = typeof portfolioData;
