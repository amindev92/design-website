import React from 'react'
import { Article } from '../../components'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const blogData = [
    {
        title: 'Cisco accelerates observability strategy with CX monitoring',
    },
    {
        title: 'IT Priorities 2023: Business automation surges'
    },
    {
        title: 'MEPs vote in raft of amendments to EU AI Act'
    },
    {
        title: 'Let’s put an end to secrecy and cover-ups in ransomware attacks'
    },
    {
        title: 'IT missing link between enterprise network and staff experience'
    }
]

const Blog = () => {
    return (
        <div className='blog section--padding'>
            <div className='blog__heading'>
                <h2 className='gradiant--text'>Blog</h2>
            </div>
            <div className='blog__container'>
                <div className='blog__container-groupA'>
                    <Article imgurl={blog01} date='May 13 2023' title={blogData[0].title} />
                </div>
                <div className='blog__conatainer-groupB'>
                    <Article imgurl={blog02} date='May 13 2023' title={blogData[1].title} />
                    <Article imgurl={blog03} date='May 12 2023' title={blogData[2].title} />
                    <Article imgurl={blog04} date='May 12 2023' title={blogData[3].title} />
                    <Article imgurl={blog05} date='May 12 2023' title={blogData[4].title} />
                </div>
            </div>
        </div>
    )
}

export default Blog