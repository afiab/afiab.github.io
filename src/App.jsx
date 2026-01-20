import './App.css'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

function App() {

  const projectData = [
    {
      type: "title",
      header: "Welcome to My Portfolio",
    },
    {
      type: "paragraph",
      content: "I'm a Software Engineering major with a passion for creating practical digital solutions. Explore my work across software development, graphic media design, and business operations."
    },
    {
      type: "text",
      header: "Software Engineering",
      content: "Learn more about my education, projects and experience in software engineering"
    },
    {
      type: "image-overlay",
      imageUrl: "images/Home-Softeng.png",
      title: "Projects & Experience",
      subtitle: "View My Software Engineering Work",
      link: "/softeng" // The destination URL
    },
    {
      type: "text",
      header: "Graphic Design",
      content: "I create graphics for social media marketing campaigns, branding, and more."
    },
    {
      type: "image-overlay",
      imageUrl: "images/Home-Media.png",
      title: "Media Campaigns",
      subtitle: "View My Graphic Media Design Work",
      link: "/media" // The destination URL
    },
    {
      type: "text",
      header: "Business Operations + HR",
      content: "With my double minor in Business Operations and Human Resources, I bring a unique perspective to real-world business challenges. View some of my solutions below."
    },
    {
      type: "image-overlay",
      imageUrl: "/images/Home-Business.png",
      title: "Cases & Solutions",
      subtitle: "Real-World Business Operations",
      link: "/business" // The destination URL
    }
];

  return (
    <>
      <Sidebar />
      <MainContent sections={projectData} />
    </>
  )
}

export default App
