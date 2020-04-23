import React from "react";
import Helmet from "react-helmet";
import { Waypoint } from "react-waypoint";
import phil from "../../static/assets/images/phil.jpg";
import scss from "../../static/assets/images/scss.png";
import css from "../../static/assets/images/css.png";
import html from "../../static/assets/images/html.png";
import js from "../../static/assets/images/js.png";
import mongo from "../../static/assets/images/mongo.png";
import mysql from "../../static/assets/images/mysql.png";
import python from "../../static/assets/images/python.png";
import sqlite from "../../static/assets/images/sqlite.png";
import react from "../../static/assets/images/react.png";
import git from "../../static/assets/images/git.png";
import Header from "./header";
import Layout from "./layout";
import Nav from "./nav";
import Icons from "../helpers/icons";
import Footer from "./footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    Icons();

    this.state = {
      stickyNav: false,
    };
  }
  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  };

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
                  <p>Ever since i was about 12 years old, I discovered a fascination with building something and actually seeing it function the way I had intended it to. It was everything from rebuilding a motorcycle engine to upgrading the family computer's ram to 512 MB! Even as an adult, successfully assembling my daughters crib is chalked up as a win for me. </p>
                  <p>I've always felt that these traits I had discovered were critical components to my overall happiness and success in my career, however, I had no idea what field these should be applied to. Until I took a leap of faith and began my development journey.</p>
                  <p>I attended Bottega Tech's full time, 12 week, Full-Stack Engineering course. And it was hardcore! I love working with many different frameworks and libraries such as Flask, Django, Node, and most of all React. If I'm not consumed by a development project, then I'll most definitely be riding motocross, eating at an awesome restaurant, or sitting in front of my PC and enjoying some kind of game with an incredible single player experience.</p>
                  <p>I consider myself a down-to-earth nerd</p>
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
              <ul className="actions"></ul>
            </footer>
          </section>

          <section id="talents" className="main special">
            <header className="major">
              <h2>Talents</h2>
            </header>
            <ul className="statistics">
              <li>
                <span>
                  <img
                    src={python}
                    alt=""
                    style={{ width: "100%", height: "150px" }}
                  />
                </span>
                <strong>Python</strong>
              </li>
              <li>
                <span>
                  <img
                    src={js}
                    alt=""
                    style={{ width: "100%", height: "150px" }}
                  />
                </span>
                <strong>JavaScript</strong>
              </li>
              <li>
                <span>
                  <img
                    src={html}
                    alt=""
                    style={{ width: "100%", height: "150px" }}
                  />
                </span>
                <strong>Html</strong>
              </li>
              <li>
                <span>
                  <img
                    src={react}
                    alt=""
                    style={{ width: "100%", height: "150px" }}
                  />
                </span>
                <strong>React</strong>
              </li>
              <li>
                <span>
                  <img
                    src={mongo}
                    alt=""
                    style={{ width: "100%", height: "150px" }}
                  />
                </span>
                <strong>MongoDB</strong>
              </li>
            </ul>
            <ul className="statistics">
              <li>
                <span>
                  <img
                    src={mysql}
                    alt=""
                    style={{ width: "100%", height: "150px" }}
                  />
                </span>
                <strong>MySQL</strong>
              </li>
              <li>
                <span>
                  <img
                    src={sqlite}
                    alt=""
                    style={{ width: "100%", height: "150px" }}
                  />
                </span>
                <strong>SQLite</strong>
              </li>
              <li>
                <span>
                  <img
                    src={scss}
                    alt=""
                    style={{ width: "100%", height: "150px" }}
                  />
                </span>
                <strong>Scss</strong>
              </li>
              <li>
                <span>
                  <img
                    src={css}
                    alt=""
                    style={{ width: "100%", height: "150px" }}
                  />
                </span>
                <strong>Css</strong>
              </li>
              <li>
                <span>
                  <img
                    src={git}
                    alt=""
                    style={{ width: "100%", height: "150px" }}
                  />
                </span>
                <strong>Git</strong>
              </li>
            </ul>

            <footer className="major">
              <ul className="actions"></ul>
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
        </div>
        <section id="contact">
          <Footer />
        </section>
      </Layout>
    );
  }
}

export default App;
