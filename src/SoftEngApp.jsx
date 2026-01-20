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
            header: "Experience",
        },
        {
            type: "experience",
            jobTitle: "TechStart Intern - Incoming",
            company: "Liberty Mutual",
            startDate: "MAY 2026",
            endDate: "AUG 2026",
            responsibilities: [
                "Incoming Summer 2026 TechStart Intern at Liberty Mutual.",
            ]
        },
        {
            type: "experience",
            jobTitle: "Software Engineering Co-op",
            company: "Rochester Institute of Technology",
            startDate: "JAN 2026",
            endDate: "PRESENT",
            responsibilities: [
                "Spring 2026 Semester Co-op. More details coming soon!",
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
            imageUrl: "/images/Softeng-Synop.png",
            title: "Synop: AI Article Summarizer",
            subtitle: "July 2025",
            link: "/swe" // The destination URL
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
            imageUrl: "/images/Softeng-Visualizer.png",
            title: "TD Bank Visualizer",
            subtitle: "March 2025",
            link: "/swe" // The destination URL
        },
        {
            type: "skills-only",
            skills: [
                "Node.js", "React", "ReCharts", "PapaParse", "JavaScript", "HTML/CSS", "Vercel"
            ]
        },
        {
            type: "paragraph",
            content: "A web application that visualizes transaction history from TD Bank. Users can upload their CSV transaction files, and the app generates interactive charts to help them understand their spending habits and financial trends over time."
        },
        {
            type: "image-overlay",
            imageUrl: "/images/Softeng-Cleanup.png",
            title: "Folder Cleanup",
            subtitle: "May - July 2024",
            link: "/swe" // The destination URL
        },
        {
            type: "skills-only",
            skills: [
                "Python", "os", "shutil", "tkinter", "pyInstaller"
            ]
        },
        {
            type: "paragraph",
            content: "An application that facilitates folder management by grouping a folder's contents through backend scripting and a frontend interface."
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
