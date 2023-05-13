import React from 'react'
import './services.css'
import imageServices from '../../assets/images/png/woman1.png'

const Services = () => {
    return (
        <div className='services section--padding'>
            <div className='services__image'>
                <img src={imageServices} alt='Services'></img>
            </div>
            <div className='services__content'>

                <span>Get to know our services</span>
                <h3 className='gradiant--text'>Website and logo design</h3>
                <p>
                    Throughout all web development services, We adhere to a quality-first approach based on ISO 9001-certified quality management system. Our comprehensive security management program with robust security controls, policies and technologies is compliant with ISO 27001 regulations. </p>
            </div>
        </div>
    )
}

export default Services