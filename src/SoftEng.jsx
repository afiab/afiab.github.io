import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SoftEngApp from './SoftEngApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SoftEngApp />
  </StrictMode>,
)
