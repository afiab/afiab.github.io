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
            content: "This page highlights my experience and projects in Business Operations and Human Resource Management."
        },
        {
            type: "title",
            header: "Education",
        },
        {
            type: "experience",
            jobTitle: "B.S. Software Engineering, Business Admin. & HR Minors",
            company: "Rochester Institute of Technology",
            startDate: "Expected",
            endDate: "AUG 2027",
            skills: ["HR Programs", "Job Analysis", "Training & Development", "Business Ethics", "Organizational Behavior", "Spreadsheets", "Presentations", "Public Speaking"],
            responsibilities: [
                "Double Minor in Business Administration and Human Resource Management.",
                "Relevant Coursework: Human Resource Management, Organizational Behavior, Principles of Marketing, Business Ethics."
            ]
        },
        {
            type: "experience",
            jobTitle: "Microsoft Office Specialist - Associate (Office 2019)",
            company: "Microsoft",
            startDate: "AUG 2022",
            endDate: "AUG 2022",
            skills: ["Microsoft Office", "Excel", "PowerPoint", "Word"],
            responsibilities: [
                "Earned Microsoft Office Specialist (MOS) Associate certification for Microsoft Office 2019 via completion of Excel, PowerPoint, and Word Associate certifications.",
            ]
        },
        {
            type: "title",
            header: "Experience",
        },
        {
            type: "experience",
            jobTitle: "Secretary (Eboard Position)",
            company: "Computing Organization for Multicultural Students (COMS) at RIT",
            startDate: "DEC 2023",
            endDate: "Present",
            skills: ["Leadership", "Database Administration", "Spreadsheets", "Google Apps Script", "JavaScript"],
            responsibilities: [
                "Optimize data parsing for 300+ members using advanced formulas, filters, and database management skills in Excel and Spreadsheets, resulting in 175% efficiency in membership tracking and operations.",
                "Implemented and executed JavaScript scripts through the Google AppScript extension to send regularly scheduled communications and updates, improving membership transparency by over 200%.",
                "Founded the COMS Alumni Network, connecting over 50 alumni and active student members to enhance professional networking and collaboration, while using automated Google Forms to collect data and reduce manual input time by 30% and increase data accuracy by 125%.",
                "Manage 50+ meeting documents and weekly presentations in Google Drive, ensuring accessibility and organization for all members of the organization."
            ]
        },
        {
            type: "title",
            header: "Projects",
        },
        {
            type: "image-overlay",
            imageUrl: "/images/Business-Membership.png",
            title: "COMS Membership Management",
            subtitle: "December 2023 to Present",
            link: "/business" // The destination URL
        },
        {
            type: "skills-only",
            skills: [
                "Spreadsheets", "Google Apps Script", "JavaScript", "Organizational Skills", "Communication"
            ]
        },
        {
            type: "paragraph",
            content: "A large part of my role as Secretary involves managing and optimizing the membership database for COMS. By leveraging advanced spreadsheet techniques and Google Apps Script, I have significantly improved the efficiency and accuracy of our membership tracking processes."
        },
        {
            type: "image-overlay",
            imageUrl: "/images/Business-Secretary.png",
            title: "COMS Secretary Role",
            subtitle: "December 2023 to Present",
            link: "/business" // The destination URL
        },
        {
            type: "skills-only",
            skills: [
                "Leadership", "Data Analysis", "Spreadsheets", "Onboarding & Training", "Forms"
            ]
        },
        {
            type: "paragraph",
            content: "This section highlights various tasks I've undertaken as Secretary, showcasing my leadership and organizational skills in managing communications, founding the alumni network, maintaining essential documents for the organization, and more!"
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