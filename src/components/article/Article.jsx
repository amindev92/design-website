import React from 'react'
import './article.css'

const Article = ({ imgurl, date, title }) => {
    return (
        <div className='article__container'>
            <div className='article__container-img'>
                <img src={imgurl} alt={title + '-image'} ></img>
            </div>
            <div className='article__container-caption'>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read more</p>
            </div>
        </div>
    )
}

export default Article