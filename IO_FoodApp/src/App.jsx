import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './komponenty/header.jsx';
import Footer from './komponenty/footer.jsx';
import Home from './strony/Home.jsx';
import About from './strony/About.jsx';
import Menu from './strony/Menu.jsx';
import Galery from './strony/Galery.jsx';
import Contact from './strony/Contact.jsx';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/galery" element={<Galery />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;