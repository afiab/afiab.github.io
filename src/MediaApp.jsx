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
            imageUrl: "/images/Media_COMS.png",
            title: "COMS Public Relations Graphics",
            subtitle: "December 2025 to Present",
            link: "/media" // The destination URL
        },
        {
            type: "paragraph",
            content: "Additional paragraph content specific to Graphic Media Design..."
        },
        {
            type: "image-overlay",
            imageUrl: "/images/Media_HACKCOMS.png",
            title: "HACK.COMS Marketing Campaign",
            subtitle: "March 2025 to November 2025",
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
