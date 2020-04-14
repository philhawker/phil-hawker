import React from 'react'

import logo from '../../static/assets/images/logo.svg';

const Header = (_props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>PHIL HAWKER</h1>
        <p>I'm a husband, a father, and a Full Stack Engineer.<br /> I'm also a meme enthusiast. <br />
        See my <a href="https://www.facebook.com/phil.hawker.7">facebook page</a> for further insite on my memes.</p>
    </header>
)

export default Header
