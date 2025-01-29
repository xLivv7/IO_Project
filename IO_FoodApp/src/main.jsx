import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import QR from './QR.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        <QR />
  </StrictMode>,
)
