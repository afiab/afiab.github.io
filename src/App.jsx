import './App.css'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

function App() {

  const projectData = [
    {
      type: "title",
      header: "WELCOME TO MY PORTFOLIO"
    },
    {
      type: "paragraph",
      content: "(placeholder cuz im too lazy to write an intro right now)"
    },
    {
      type: "text",
      header: "Software Engineering",
      content: "blah blah lorem ipsum dolor sit amet place holder text..."
    },
    {
      type: "image-overlay",
      imageUrl: "/public/placeholder.gif",
      title: "Projects & Experience",
      subtitle: "Month Year to Month Year",
      link: "/softeng" // The destination URL
    },
    {
      type: "text",
      header: "Graphic Design",
      content: "blah blah lorem ipsum dolor sit amet place holder text..."
    },
    {
      type: "image-overlay",
      imageUrl: "/public/placeholder.gif",
      title: "Media Campaigns",
      subtitle: "Month Year to Month Year",
      link: "/swe" // The destination URL
    },
    {
      type: "text",
      header: "Business Operations + HR",
      content: "blah blah lorem ipsum dolor sit amet place holder text..."
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
      <MainContent sections={projectData} />
    </>
  )
}

export default App
