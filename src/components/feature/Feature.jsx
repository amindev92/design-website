import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => {
    return (
        <div className='feature-container' >
            <div className='feature-container__title'>
                <div />
                <h2>{title}</h2>
            </div>
            <div className='feature-container__caption'>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Feature