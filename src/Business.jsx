import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BusinessApp from './BusinessApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BusinessApp />
  </StrictMode>,
)
