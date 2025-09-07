// NODE MODULES
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// COMPONENTS
import App from './App.jsx'

// CSS
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

