import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
        <div
            style={{
                background: '#f4f4f4',
                paddingTop: '10px',
                paddingBottom:'0px',
                marginBottom: '0px'
            }}
        >
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
            }}
            >

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>

            </ul>

        </div>
    )
    export default Menu
