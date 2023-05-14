import React from 'react'
import './footer.css'
import logoimg from '../../assets/images/png/logo.png'

const Footer = () => {
    return (
        <div className='footer section--padding'>
            <div className='footer__heading gradiant--text'>
                <h2>Do you want to step in to the future before others</h2>
            </div>
            <div className='footer__btn'>
                <p>Request early access</p>
            </div>
            <div className='footer__container'>
                <div className='footer__container-logo'>
                    <img src={logoimg} alt='logo'></img>
                    <p>Design, Develop, Support</p>
                </div>
                <div className='footer__container-links'>
                    <div className='footer__container-links__menu'>
                        <h3 className='footer__container-links__menu-title'>
                            Links
                        </h3>
                        <p>Social media</p>
                        <p>Contacts</p>
                        <p>About us</p>
                        <p>Register</p>
                    </div>

                    <div className='footer__container-links__menu'>
                        <h3 className='footer__container-links__menu-title'>
                            Company
                        </h3>
                        <p>Terms & Conditions</p>
                        <p>Privacy policy</p>
                        <p>Cookies</p>
                    </div>

                    <div className='footer__container-links__menu'>
                        <h3 className='footer__container-links__menu-title'>
                            Get it Touch
                        </h3>
                        <p>Mashhad</p>
                        <p>+98915000000</p>
                        <p>email@email.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer