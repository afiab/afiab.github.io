import './App.css'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

function MediaApp() {

    const MediaData = [
        {
            type: "title",
            header: "Graphic Media Design",
        },
        {
            type: "paragraph",
            content: "This page showcases my experience in Graphic Design, including projects for positions I've held related to the marketing and public relations of various organizations."
        },
        {
            type: "title",
            header: "Education",
        },
        {
            type: "experience",
            jobTitle: "Professional Certificate - Introduction to Graphic Design",
            company: "LCI Education - edX",
            startDate: "JAN",
            endDate: "JAN 2026",
            skills: ["Project Presentation", "Design", "Color Theory", "Mock-Ups", "Vectors", "Adobe"],
            responsibilities: [
            ]
        },
        {
            type: "title",
            header: "Experience",
        },
        {
            type: "experience",
            jobTitle: "Adobe Express Student Ambassador",
            company: "Adobe",
            startDate: "JUN 2025",
            endDate: "PRESENT",
            skills: ["Adobe Express", "Branding", "Social Media", "Graphic Design", "Marketing"],
            responsibilities: [
            ]
        },
        {
            type: "experience",
            jobTitle: "Public Relations Graphic Designer",
            company: "Computing Organization for Multicultural Students (COMS) at RIT",
            startDate: "DEC 2025",
            endDate: "PRESENT",
            skills: ["Canva Pro", "Design", "Marketing", "PR Timeline", "Instagram", "Adobe Express"],
            responsibilities: [
                "Design engaging promotional banners and Instagram Graphics for upcoming meetings and events weekly using Canva",
                "Manage Instagram page for the organization, posting regular updates and event promotions to increase member engagement"
            ]
        },
        {
            type: "experience",
            jobTitle: "HACK.COMS 2025 Marketing Director",
            company: "Computing Organization for Multicultural Students (COMS) at RIT",
            startDate: "FEB",
            endDate: "NOV 2025",
            skills: ["Canva Pro", "Design", "Marketing", "PR Timeline", "Instagram", "Adobe Express"],
            responsibilities: [
                "Responsible for the creation of all advertising and promotional materials for HACK.COMS, whose mission is to uplift diverse and underrepresented students in computing.",
                "Created a Marketing Release schedule 5 months in advance, detailing content creation logistics for over 40+ pieces of promotional materials using table-views in spreadsheets, with the goal of growing audience exposure and engagement through marketing strategy and tracking.",
                "Curated engaging content with consistent branding through Canva, with custom-tailored graphics designed with Krita desktop software.",
                "Tailored a Prospectus Report with captivating charts and data visualizations regarding context and impact from previous iterations of HACK.COMS."
            ]
        },
        {
            type: "title",
            header: "Projects",
        },
        {
            type: "image-overlay",
            imageUrl: "/images/Media_COMS.png",
            title: "COMS Public Relations Graphics",
            subtitle: "December 2025 to Present",
            link: "/media" // The destination URL
        },
        {
            type: "paragraph",
            content: "This is a collection of promotional graphics I have designed for COMS events and meetings using Canva and Adobe Express."
        },
        {
            type: "image-overlay",
            imageUrl: "/images/Media_HACKCOMS.png",
            title: "HACK.COMS Marketing Campaign",
            subtitle: "March 2025 to November 2025",
            link: "/swe" // The destination URL
        },
        {
            type: "paragraph",
            content: "These are some of the marketing materials I created to promote HACK.COMS 2025, such as flyers and social media posts, using Canva and Adobe Express."
        }
    ];

    return (
        <>
            <Sidebar />
            <MainContent sections={MediaData} />
        </>
    )
}

export default MediaApp
