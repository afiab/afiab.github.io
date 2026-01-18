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
            content: "paragraph explaining this section"
        },
        {
            type: "paragraph",
            content: "Additional paragraph content"
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
            content: "Additional paragraph content specific to Graphic Media Design..."
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
            <MainContent sections={MediaData} />
        </>
    )
}

export default MediaApp
