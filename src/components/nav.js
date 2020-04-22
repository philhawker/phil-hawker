import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={['about', 'projects', 'talents', 'resume', 'Contact Me']} currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="about">
                    <a href="#">About Me</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="projects">
                    <a href="#">Projects</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="talents">
                    <a href="#">Talents</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="resume">
                    <a href="#">Resume</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="contact">
                    <a href="#">Contact Me</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav