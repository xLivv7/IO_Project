import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './header.jsx'
import QR from './QR.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <App />
        <QR />
  </StrictMode>,
)
