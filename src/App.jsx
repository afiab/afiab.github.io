import './App.css'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

function App() {

  const projectData = [
  {
    type: "text",
    header: "Software Engineering",
    content: "blah blah lorem ipsum dolor sit amet place holder text..."
  },
  {
    type: "image-overlay",
    imageUrl: "/public/placeholder.png",
    title: "Title here",
    subtitle: "Month Year to Month Year",
    link: "/swe" // The destination URL
  },
  {
    type: "text",
    header: "Graphic Design",
    content: "blah blah lorem ipsum dolor sit amet place holder text..."
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
