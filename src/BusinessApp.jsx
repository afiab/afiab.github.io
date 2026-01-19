import './App.css'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

function BusinessApp() {

    const BusinessData = [
        {
            type: "title",
            header: "Business Operations & HR",
        },
        {
            type: "paragraph",
            content: "paragraph explaining this section"
        },
        {
            type: "paragraph",
            content: "Additional paragraph content specific to Business Operations & HR..."
        },
        {
            type: "image-overlay",
            imageUrl: "/images/Business-Membership.png",
            title: "COMS Membership Management",
            subtitle: "December 2023 to Present",
            link: "/business" // The destination URL
        },
        {
            type: "paragraph",
            content: "Additional paragraph content specific to Business Operations & HR ..."
        },
        {
            type: "image-overlay",
            imageUrl: "/images/Business-Secretary.png",
            title: "COMS Secretary Role",
            subtitle: "December 2023 to Present",
            link: "/business" // The destination URL
        },
        {
            type: "image-overlay",
            imageUrl: "/images/Business-Tracker.png",
            title: "Job Application Tracker",
            subtitle: "2025 to Present, Personal Project",
            link: "/business" // The destination URL
        }
    ];

    return (
        <>
            <Sidebar />
            <MainContent sections={BusinessData} />
        </>
    )
}

export default BusinessApp