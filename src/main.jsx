import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './pages/Homepage'
import './styles/global.css'
import './styles/responsive.css'
import './fonts/site-font.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage/>
  </StrictMode>,
)
