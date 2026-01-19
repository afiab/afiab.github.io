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
            content: "paragraph explaining this section"
        },
        {
            type: "paragraph",
            content: "Additional paragraph content specific to Software Engineering..."
        },
        {
            type: "image-overlay",
            imageUrl: "/images/Softeng-Synop.png",
            title: "Synop: AI Article Summarizer",
            subtitle: "MERN, Gemini API, Axios, Cheerio",
            link: "/swe" // The destination URL
        },
        {
            type: "paragraph",
            content: "Additional paragraph content specific to Software Engineering..."
        },
        {
            type: "image-overlay",
            imageUrl: "/images/Softeng-Visualizer.png",
            title: "TD Bank Visualizer",
            subtitle: "React (ReCharts, PapaParse), Vercel",
            link: "/swe" // The destination URL
        },
        {
            type: "image-overlay",
            imageUrl: "/images/Softeng-Cleanup.png",
            title: "Folder Cleanup",
            subtitle: "Python (OS, Shutil, Tkinter)",
            link: "/swe" // The destination URL
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
