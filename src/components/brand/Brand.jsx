import React from 'react'
import './brand.css'
import { Aws, Nodejs, Reactjs, Nextjs, Mysql } from './imports'

const Brand = () => {
    return (
        <div className='our-technology section--padding'>
            <div className='our-technology__item'>
                <img src={Aws} alt="Aws"></img>
            </div>
            <div className='our-technology__item'>
                <img src={Nodejs} alt="Nodejs"></img>
            </div>
            <div className='our-technology__item'>
                <img src={Reactjs} alt="Reactjs"></img>
            </div>
            <div className='our-technology__item'>
                <img src={Nextjs} alt="Nextjs"></img>
            </div>
            <div className='our-technology__item'>
                <img src={Mysql} alt="Mysql"></img>
            </div>
        </div>
    )
}

export default Brand