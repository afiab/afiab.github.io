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
            imageUrl: "/public/placeholder.gif",
            title: "Projects & Experience",
            subtitle: "Month Year to Month Year",
            link: "/swe" // The destination URL
        },
        {
            type: "paragraph",
            content: "Additional paragraph content specific to Software Engineering..."
        },
        {
            type: "image-overlay",
            imageUrl: "/public/placeholder.gif",
            title: "Media Campaigns",
            subtitle: "Month Year to Month Year",
            link: "/swe" // The destination URL
        },
        {
            type: "image-overlay",
            imageUrl: "/public/placeholder.gif",
            title: "Cases & Solutions",
            subtitle: "Month Year to Month Year",
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
