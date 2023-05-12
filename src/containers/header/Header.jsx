import React from 'react'
import './header.css'
import people from '../../assets/images/png/people.png'
import service from '../../assets/images/png/header-image-1.png'

const Header = () => {
    return (
        <div className='header section--padding'>
            <div className='header__content'>
                <h1 className='header__content-title gradiant--text'>
                    Get to know our services
                </h1>
                <p className='header__content-caption'>
                    Create a mobile-friendly, free website for your business, then watch it take off with built-in marketing.
                </p>
                <div className='header__content-input'>
                    <input type="email" placeholder='Please Enter your email address'></input>
                    <button type='button'>Submit</button>
                </div>
                <div className='header__content-people'>
                    <img src={people} alt="people"></img>
                    <p>More than 1,500 people ordered the project in the last 3 months.</p>
                </div>
            </div>
            <div className='header__image'>
                <img src={service} alt="header-img"></img>
            </div>
        </div>
    )
}

export default Header