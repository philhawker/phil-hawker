import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import phil from '../assets/images/phil.jpg'
import scss from '../assets/images/scss.png'
import css from '../assets/images/css.png'
import html from '../assets/images/html.png'
import js from '../assets/images/js.png'
import mongo from '../assets/images/mongo.png'
import mysql from '../assets/images/mysql.png'
import python from '../assets/images/python.png'
import sqlite from '../assets/images/sqlite.png'
import react from '../assets/images/react.png'
import git from '../assets/images/git.png'
import Header from './header'
import Layout from './layout'
import Nav from './nav'
import Icons from '../helpers/icons'


class Index extends React.Component {
  constructor(props) {
    super(props)

    Icons()


    this.state = {
      stickyNav: false,

    }


  }
  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }


  render() {
    return (
      <Layout>



        <Helmet title="Phil Hawker's Portfolio" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />


        <div id="main">
          <section id="about" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p>
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>

              </div>
              <span className="image">
                <img src={phil} alt="" />
              </span>
            </div>
          </section>

          <section id="projects" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Ipsum consequat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Amed sed feugiat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">

              </ul>
            </footer>
          </section>

          <section id="talents" className="main special">
            <header className="major">
              <h2>Talents</h2>

            </header>
            <ul className="statistics" >
              <li>
                <span >
                  <img src={python} alt="" style={{ width: '100%', height: '150px' }} />
                </span>
                <strong>Python</strong>
              </li>
              <li>
                <span >
                  <img src={js} alt="" style={{ width: '100%', height: '150px' }} />
                </span>
                <strong>JavaScript</strong>
              </li>
              <li>
                <span >
                  <img src={html} alt="" style={{ width: '100%', height: '150px' }} />
                </span>
                <strong>Html</strong>
              </li>
              <li>
                <span >
                  <img src={react} alt="" style={{ width: '100%', height: '150px' }} />
                </span>
                <strong>React</strong>
              </li>
              <li>
                <span >
                  <img src={mongo} alt="" style={{ width: '100%', height: '150px' }} />
                </span>
                <strong>MongoDB</strong>
              </li>
            </ul>
            <ul className='statistics'>
              <li >
                <span >
                  <img src={mysql} alt="" style={{ width: '100%', height: '150px' }} />
                </span>
                <strong>MySQL</strong>
              </li>
              <li>
                <span >
                  <img src={sqlite} alt="" style={{ width: '100%', height: '150px' }} />
                </span>
                <strong>SQLite</strong>
              </li>
              <li >
                <span >
                  <img src={scss} alt="" style={{ width: '100%', height: '150px' }} />
                </span>
                <strong>Scss</strong>
              </li>
              <li >
                <span >
                  <img src={css} alt="" style={{ width: '100%', height: '150px' }} />
                </span>
                <strong>Css</strong>
              </li>
              <li >
                <span >
                  <img src={git} alt="" style={{ width: '100%', height: '150px' }} />
                </span>
                <strong>Git</strong>
              </li>
            </ul>

            <footer className="major">
              <ul className="actions">

              </ul>
            </footer>
          </section>

          <section id="resume" className="main special">
            <header className="major">
              <h2>Resume</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
          </section>

          <section id='contact'>
            <footer className="major">
              <ul className="actions">


              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index

