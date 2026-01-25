import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import COMSPRApp from './COMSPRApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <COMSPRApp />
  </StrictMode>,
)
