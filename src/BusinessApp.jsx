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
            imageUrl: "/public/placeholder.gif",
            title: "Projects & Experience",
            subtitle: "Month Year to Month Year",
            link: "/business" // The destination URL
        },
        {
            type: "paragraph",
            content: "Additional paragraph content specific to Business Operations & HR ..."
        },
        {
            type: "image-overlay",
            imageUrl: "/public/placeholder.gif",
            title: "Media Campaigns",
            subtitle: "Month Year to Month Year",
            link: "/business" // The destination URL
        },
        {
            type: "image-overlay",
            imageUrl: "/public/placeholder.gif",
            title: "Cases & Solutions",
            subtitle: "Month Year to Month Year",
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