import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './komponenty/header.jsx'
import Footer from './komponenty/footer.jsx'
//import QR from './QR.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <App />
        <Footer />
  </StrictMode>,
)
