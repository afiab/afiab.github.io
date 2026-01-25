import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HACKCOMSPRApp from './HACKCOMSPRApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HACKCOMSPRApp />
  </StrictMode>,
)
