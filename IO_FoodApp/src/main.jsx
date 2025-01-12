import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
//import QR from './QR.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <App />
=======
import Header from './header.jsx'
import QR from './QR.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <App />
        <QR />
>>>>>>> code_qr
  </StrictMode>,
)
