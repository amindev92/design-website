import React from 'react'

import { Blog, Features, Footer, Header, Services, Whatservices } from './containers'
import { Brand, Cta, Navbar } from './components'

import './app.css'

const App = () => {
    return (
        <div>
            <div className='main-header main-header--gradiant-dark'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Whatservices />
            <Features />
            <Services />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App