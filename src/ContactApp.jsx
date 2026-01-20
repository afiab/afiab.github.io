import './App.css'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

function ContactApp() {

    const ContactData = [
        {
            type: "title",
            header: "Resume",
        },
        {
            type: "iframe",
            link: "public/Afia Bidica Resume.pdf"
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