import './App.css'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

function SoftEngApp() {

    const SEData = [
        {
            type: "title",
            header: "Software Engineering",
        },
        {
            type: "paragraph",
            content: "This page showcases my experience and projects in software engineering."
        },
        {
            type: "title",
            header: "Education",
        },
        {
            type: "experience",
            jobTitle: "Software Engineering - Bachelor of Science",
            company: "Rochester Institute of Technology",
            endDate: "AUG 2027",
            skills: ["Python", "React", "PostgreSQL", "Flask", "Java", "C++", "JavaScript", "HTML/CSS", "Agile", "Figma"],
            responsibilities: [
                "Double Minor in Business Administration and Human Resource Management.",
                "Tutor and Teaching Assistent for introductory programming courses (Python, Java, C++).",
                "Relevant Coursework: Software Engineering, Web Engineering, CS Theory, Analysis of Algorithms."
            ]
        },
        {
            type: "title",
            header: "Experience",
        },
        {
            type: "experience",
            jobTitle: "Software Engineering Co-op",
            company: "Safran Trusted 4D",
            startDate: "AUG 2026",
            endDate: "DEC 2026",
            skills: ["React","JavaScript","Golang", "VictoriaMetrics", "Prometheus","Timing Synchronization (NTP, PTP, White Rabbit)"],
            responsibilities: [
                "Incoming Software Engineering Co-op for Fall 2026 with a focus on firmware and embedded software.",
            ]
        },
        {
            type: "experience",
            jobTitle: "TechStart Intern (Full Stack Software Engineer)",
            company: "Liberty Mutual Insurance",
            startDate: "JUN 2026",
            endDate: "AUG 2026",
            skills: ["React","TypeScript","AWS Lambda"],
            responsibilities: [
                "Summer 2026 TechStart Intern at Liberty Mutual. Working as a Full Stack Software Engineering intern.",
            ]
        },
        {
            type: "experience",
            jobTitle: "Software Engineering Co-op",
            company: "Rochester Institute of Technology: Golisano College of Computing and Information Sciences",
            startDate: "JAN 2026",
            endDate: "MAY 2026",
            skills: ["React", "TypeScript", "Polaris", "Shopify", "API", "Agile", "GraphQL", "AWS", "Documentation"],
            responsibilities: [
                "Spring 2026 Semester Co-op.",
                "Optimized homepage performance by refactoring the index route to fetch revenue data asynchronously via API post-mount; introduced a fluid loading state that eliminated server loader bottlenecks and prevented UI blocking.",
                "Refactored 1,000+ lines of code to strictly adhere to DRY principles, extracting 100+ hardcoded values into centralized constants to improve codebase maintainability and readability.",
                "Elevated homepage UI/UX by implementing Shopify Polaris components using React and TypeScript, resulting in a seamless user journey and improved interface responsiveness.",
                "Expanded test coverage by designing and executing comprehensive UI test cases for critical user paths, including onboarding, analytics, and subscription management pages.",
                "Architected comprehensive repository documentation, authoring 9 detailed user guides and a complete root README covering system architecture, AWS authorization, environment configuration, and local deployment to streamline developer onboarding.",
                "Enhanced team operational efficiency by automating metrics in internal tracking systems and optimizing the SUMI Feedback Form to accelerate response collection from beta testers."
            ]
        },
        {
            type: "experience",
            jobTitle: "Software Engineer - MESH Extern",
            company: "FactSet Research Systems",
            startDate: "MAY",
            endDate: "MAY 2025",
            skills: ["Streamlit", "Python", "API", "Agile"],
            responsibilities: [
                "1 of 15 participants selected for a competitive externship program focused on FactSet's software engineering practices, core products like the FactSet Workstation, and fintech industry fundamentals.",
                "Collaborated in a team to design, develop, and deploy an AI-powered chatbot using Python, Streamlit, and OpenAI API, delivering personalized workplace fashion advice within budget constraints.",
                "Practiced Agile methodologies and peer collaboration to deliver a functional solution under tight deadlines."
            ]
        },
        {
            type: "experience",
            jobTitle: "Software Engineering Intern",
            company: "Kode wiith Klossy",
            startDate: "JUL",
            endDate: "AUG 2024",
            skills: ["Javascript", "HTML/CSS", "Python", "LookerStudio", "SDLC", "Agile"],
            responsibilities: [
                "Led a team of 6 engineers through the full software development lifecycle, including wireframing, and implementation, using Agile methodologies, to deliver a responsive, mobile-friendly website in under 2 weeks, on time and within scope.",
                "Developed and deployed a web application with HTML, CSS, and JavaScript to educate businesses on cybersecurity’s financial impact, reaching 90+ peer engineers.",
                "Analyzed large datasets (28,900+ lines) and created actionable data visualizations using Python (Pandas, Matplotlib, NumPy) and Looker Studio, enabling data-driven decision-making."
            ]
        },
        {
            type: "title",
            header: "Projects",
        },
        {
            type: "image-overlay",
            imageUrl: "./images/Softeng-Synop.png",
            title: "Synop: AI Article Summarizer",
            subtitle: "July 2025 | GitHub Repository ↗",
            link: "https://github.com/afiab/synop/", // The destination URL
            external: true
        },
        {
            type: "skills-only",
            skills: [
                "Express", "Node.js", "React", "Axios", "Cheerio", "JavaScript", "HTML/CSS", "Gemini API"
            ]
        },
        {
            type: "paragraph",
            content: "Synop is a web application that leverages the Gemini API to generate concise summaries of lengthy articles. Users can input a URL, and Synop fetches the article content, processes it, and provides a brief summary, enhancing reading efficiency."
        },
        {
            type: "image-overlay",
            imageUrl: "./images/Softeng-Visualizer.png",
            title: "TD Bank Visualizer",
            subtitle: "March 2025 | Github Repository ↗",
            link: "https://github.com/afiab/TDBankVisualizer", // The destination URL
            external: true
        },
        {
            type: "skills-only",
            skills: [
                "Node.js", "React", "ReCharts", "PapaParse", "JavaScript", "HTML/CSS", "Vercel"
            ]
        },
        {
            type: "paragraph",
            content: "A web application deployed with Vercel that visualizes transaction history from TD Bank. Users can upload their CSV transaction files, and the app generates interactive charts to help them understand their spending habits and financial trends over time."
        },
        {
            type: "image-overlay",
            imageUrl: "./images/Softeng-Cleanup.png",
            title: "Folder Cleanup",
            subtitle: "May - July 2024 | GitHub Repository ↗",
            link: "https://github.com/afiab/folder-cleanup/", // The destination URL
            external: true
        },
        {
            type: "skills-only",
            skills: [
                "Python", "os", "shutil", "tkinter", "pyInstaller"
            ]
        },
        {
            type: "paragraph",
            content: "A desktop application that facilitates folder management by grouping a folder's contents through backend scripting and a frontend interface."
        }
    ];

    return (
        <>
            <Sidebar />
            <MainContent sections={SEData} />
        </>
    )
}

export default SoftEngApp
