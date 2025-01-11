import './header.css';
import logo from '../Logo_Marki.jpg';

function Header() {
    return (
        <header className="header">
        <div className='Logo'>
            <img src={logo} alt='logo'></img>
                <p>BAR BABUNI</p>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                </nav>
        </header>
    );
}

export default Header;
