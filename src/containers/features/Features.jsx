import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
    {
        title: 'Web App Development',
        text: 'Web App Development we provides expert-level Web Development Services to turn your idea into a high-quality web-based solution – exactly the way you envisioned.'
    },
    {
        title: 'Cloud Web',
        text: 'With us, a trusted offshore web development vendor, you can implement complex cloud app development projects to succeed in a data-driven world.'
    },
    {
        title: 'Web Optimization',
        text: 'our experts will perform an audit of your web-based solutions and apps, with a range of A/B tests, generating a plan of improvements to undertake.'
    },
    {
        title: 'Web Design',
        text: 'Web Design If you need a web design company to deliver visually engaging IT projects with outstanding UI/UX, with its user-centered approach, is the best choice.'
    }
]

const Features = () => {
    return (
        <div className='features section--padding'>
            <div className='features__heading'>
                <h2 className='gradiant--text'>Our Services</h2>
                <p>Get to know our services</p>
            </div>
            <div className='features__container'>
                {featuresData.map((item, index) => {
                    return <Feature title={item.title} text={item.text} key={item.title + index} />
                })}
            </div>
        </div>
    )
}

export default Features