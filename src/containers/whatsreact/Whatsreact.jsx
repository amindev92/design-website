import React from 'react'
import { Feature } from '../../components'
import './whatsreact.css'

const inforamtion = [
    { title: 'What is React?', text: 'React is a JavaScript library created by Facebook,React is a User Interface (UI) library, React is a tool for building UI components' },
    { title: 'What is Babel?', text: 'Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript. With Babel, you can use the newest features of JavaScript (ES6 - ECMAScript 2015).' },
    { title: 'Create React Application', text: 'Facebook has created a Create React Application with everything you need to build a React app. It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files.' },
    { title: 'Plugging React Into a Website', text: 'You can plug React into an already existing web app over a content delivery network (CDN) to add some interactivity to that HTML page. ' }
]

const Whatsreact = () => {
    return (
        <div className='whs-react section--margin'>
            <div className='whs-react__feature'>
                <Feature title={inforamtion[0].title} text={inforamtion[0].text} />
            </div>
            <div className='whs-react__heading'>
                <h1 className='whs-react__heading-title gradiant--text'>What's React?</h1>
                <p>More information</p>
            </div>
            <div className='whs-react__feature-container'>
                <Feature title={inforamtion[1].title} text={inforamtion[1].text} />
                <Feature title={inforamtion[2].title} text={inforamtion[2].text} />
                <Feature title={inforamtion[3].title} text={inforamtion[3].text} />
            </div>
        </div>
    )
}

export default Whatsreact