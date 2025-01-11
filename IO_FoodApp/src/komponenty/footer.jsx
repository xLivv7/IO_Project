import './footer.css';
import location from './location.svg';
import mail from './mail.svg';

const location_link = "https://www.google.pl/maps/place/Uniwersytet+Bielsko-Bialski/@49.7832302,19.0551575,548m/data=!3m3!1e3!4b1!5s0x47169f9d3b7b6469:0x5b19d07f33c1de99!4m6!3m5!1s0x47169fc0a7862b97:0xab58f9e2cef89ecf!8m2!3d49.7832302!4d19.0577378!16zL20vMDUyNjFw?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="contact">
                    <a href={location_link}><img src={location} alt="lokalizaca" className="footer_img"/><span>Miasto, ulica nr</span> </a>
                    <br />
                    <a href="mailto:BarBabuni@gmail.com"><img src={mail} alt="mail" className="footer_img" /> <span>BarBabuni@gmail.com</span> </a>
                </div>
            </footer>
        </>
    );
}

export default Footer