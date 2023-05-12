import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/images/png/logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Menu = () => (
    <>
        <p>
            <a href='#home'>Home</a>
        </p>
        <p >
            <a href='#whs'>Services</a>
        </p>
        <p >
            <a href='#features'>Features</a>
        </p>
        <p>
            <a href='#services'>Our Services</a>
        </p>
        <p>
            <a href='#blog'>Blog</a>
        </p>
    </>
)

const Navbar = () => {
    const [toggleMenu, settoggleMenu] = useState(false)

    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <div className='navbar__links-logo'>
                    <img src={logo} alt='Logo'></img>
                </div>
                <div className='navbar__links-container'>
                    <Menu />
                </div>
            </div>
            <div className='navbar__signs'>
                <p className='navbar__signs-signin'>Sign in</p>
                <button className='navbar__signs-signup'>Sign up</button>
            </div>
            <div className='navbar__menu'>
                {
                    toggleMenu
                        ? <RiCloseLine color='#fff' size={28} onClick={() => settoggleMenu(false)} />
                        : <RiMenu3Line color='#fff' size={28} onClick={() => settoggleMenu(true)} />
                }
                {
                    toggleMenu && (
                        <div className='navbar__menu-container scale-up-center'>
                            <div className='navbar__menu-list'>
                                <Menu />
                                <div className='navbar__menu-link-signs'>
                                    <p className='navbar__menu-signin'>Sign in</p>
                                    <button className='navbar__menu-signup'>Sign up</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar