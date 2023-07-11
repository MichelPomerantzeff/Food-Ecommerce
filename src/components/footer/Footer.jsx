import './Footer.css';
import { Email, Facebook, Instagram, LocationOn, Phone, Twitter, WhatsApp } from '@mui/icons-material';
import { appleStore, playStore } from '../../data/data';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-box">
                <div className="footer-wrapper left">
                    <div className="footer-left">
                        <h2 className="socials">Social Medias</h2>

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
                    <div className="footer-center">
                        <h2 className="mobile-apps">Download our app</h2>

                        <div className="downloadappwrapper">
                            <img src={appleStore} alt="APPLE STORE" />
                            <img src={playStore} alt="PLAY STORE" />
                        </div>
                    </div>
                </div>

                <div className="footer-wrapper right">
                    <div className="footer-right">
                        <div className="contactbox">
                            <div className="contacticon">
                                <LocationOn />
                            </div>
                            <div className="text">
                                99 Street Name - City
                            </div>
                        </div>

                        <div className="contactbox">
                            <div className="contacticon">
                                <Phone />
                            </div>
                            <div className="text">
                                +99 999 999 999
                            </div>
                        </div>

                        <div className="contactbox">
                            <div className="contacticon">
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
                &copy; 2023. Built by&ensp;<strong>Michel Pomerantzeff</strong>
            </div>
        </footer>

    )
}
