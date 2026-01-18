import './App.css'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

function ContactApp() {

    const ContactData = [
        {
            type: "title",
            header: "Contact + Resume",
        },
        {
            type: "paragraph",
            content: "paragraph explaining this section"
        },
        {
            type: "iframe",
            link: "public/Afia Bidica Resume.pdf"
        },
        {
            type: "paragraph",
            content: "Additional paragraph content specific to Contact + Resume..."
        },
        {
            type: "image-overlay",
            imageUrl: "/public/placeholder.gif",
            title: "Projects & Experience",
            subtitle: "Month Year to Month Year",
            link: "/business" // The destination URL
        }
    ];

    return (
        <>
            <Sidebar />
            <MainContent sections={ContactData} />

        </>
    )
}

export default ContactApp