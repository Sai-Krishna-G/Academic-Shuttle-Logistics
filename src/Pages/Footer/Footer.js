import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram ,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className='sb_footer section_padding'>
                <div class='sb_footer-links'>
                    <div className='sb_footer-links_div'>
                        <h3>Quick Links</h3>
                            <a href="/Home"><p>Home</p></a>
                            <a href="/"><p>Login</p></a>
                            <a href="/Booking"><p>Booking</p></a>
                        
                    </div>
                    <div className='sb_footer-links_div'>
                        <h3>Resources</h3>
                        <a href="/Home"><p>Home</p></a>
                        <a href="/"><p>Login</p></a>
                        <a href="/Booking"><p>Booking</p></a>                        
                            
                </div>
                <div className='sb_footer-links_div'>
                    <h3>Company</h3>
                        <a href="/Home"><p>Home</p></a>
                        <a href="/"><p>Login</p></a>
                        <a href="/Booking"><p>Booking</p></a>
                </div>
                <div className='sb_footer-links_div'>
                    <h3>Support</h3>
                        <a href="/Home"><p>Home</p></a>
                        <a href="/"><p>Login</p></a>
                        <a href="/Booking"><p>Booking</p></a>
                </div>
                <div className='sb_footer-links_div'>
                    <h3>Comming so on</h3>
                    <div className='socialmedia'>
                        <p><FontAwesomeIcon icon={ faFacebook} /></p>
                        <p><FontAwesomeIcon icon={ faInstagram} /></p>
                        <p><FontAwesomeIcon icon={ faLinkedin} /></p>
                        <p><FontAwesomeIcon icon={ faTwitter} /></p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='sb_footer-below'>
                <div className='sb_footer-copyright'>
                <p>@{new Date().getFullYear()} CodeInn. All rights reserved. </p>
                </div>
                <div className='sb_footer-below-links'>
                    <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                    <a href='/privacy'><div><p>Privacy</p></div></a>
                    <a href='/security'><div><p>Security</p></div></a>
                    <a href='/cookie'><div><p>Cookies Declaration</p></div></a>
                </div>
                </div>
                </div>
                </div>)}
export default Footer;