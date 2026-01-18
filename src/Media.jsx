import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MediaApp from './MediaApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MediaApp />
  </StrictMode>,
)
