import React from "react";

const footer = () => (
  <footer id="footer" style={{ display: "flex", justifyContent: "center", color: "white" }}>
    <section style={{ alignItems: "center", color: "white" }}>
      <h2 style={{ color: "white" }}>Contact Me</h2>
      <dl className="alt">
        <dt style={{ color: "rgb(131, 164, 190)" }} >Phone</dt>
        <dd>(801) 874-0022</dd>
        <dt>Email</dt>
        <dd>philhawker90@gmail.com</dd>
      </dl>
      <ul className="icons" src="https://kit.fontawesome.com/017139aa8d.js">
        <li>
          <a
            href="https://www.facebook.com/phil.hawker.7"
            className="icon fa-facebook alt"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/phil_hawker/"
            className="icon fa-instagram alt"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/philhawker"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/philhawker/"
            className="icon fa-linkedin alt"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
    </section>
    <p
      className="copyright"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      &copy; 2020 Phil Hawker &#124; All Rights Reserved.
    </p>
  </footer>
);

export default footer;
