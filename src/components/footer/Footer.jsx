import './Footer.css';
import { Email, Facebook, Instagram, LocationOn, Phone, Twitter, WhatsApp } from '@mui/icons-material';
import { appleStore, playStore } from '../../data/data';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-box">
                <div className="footer-wrapper left">
                    <div className="footer-side footer-left">
                        <h2>Social Medias</h2>

                        <ul className="icons-wrapper">
                            <li className="facebook social-icon" name="facebook">
                                <Facebook />
                            </li>

                            <li className="instagram social-icon" name="instagram">
                                <Instagram />
                            </li>

                            <li className="whatsapp social-icon" name="whatsapp">
                                <WhatsApp />
                            </li>

                            <li className="twitter social-icon" name="twitter">
                                <Twitter />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-wrapper center">
                    <div className="footer-side footer-center">
                        <h2>Download our app</h2>

                        <div className="download-app-wrapper">
                            <img className="download-app-image" src={appleStore} alt="APPLE STORE" />
                            <img className="download-app-image" src={playStore} alt="PLAY STORE" />
                        </div>
                    </div>
                </div>

                <div className="footer-wrapper right">
                    <div className="footer-side footer-right">
                        <div className="info-box">
                            <div className="info-icon">
                                <LocationOn />
                            </div>
                            <div className="text">
                                99 Street Name - City
                            </div>
                        </div>

                        <div className="info-box">
                            <div className="info-icon">
                                <Phone />
                            </div>
                            <div className="text">
                                +99 999 999 999
                            </div>
                        </div>

                        <div className="info-box">
                            <div className="info-icon">
                                <Email />
                            </div>
                            <div className="text">
                                ecommerce@example.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <span> &copy; 2023. Developed by&ensp; </span>
                <a href="https://www.michelpomerantzeff.com" target='_blank' rel="noopener noreferrer">
                    <strong>Michel Pomerantzeff</strong>
                </a>
            </div>
        </footer>
    )
}
