import './header.css';
import logo from '../Logo_Marki.jpg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
        <div className='Logo'>
            <img src={logo} alt='logo'></img>
                <p>BAR BABUNI</p>
            </div>
            <nav>
                <Link to="/" className='nav-link'>G³ówna</Link>
                <Link to="/about" className='nav-link'>O nas</Link>
                <Link to="/menu" className='nav-link'>Menu</Link>
                <Link to="/galery" className='nav-link'>Galeria</Link>
                <Link to="/contact" className='nav-link'>Kontaktt</Link>

            </nav>
        </header>
    );
}

export default Header;
