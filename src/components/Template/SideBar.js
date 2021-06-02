import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yamini Gaur</h2>
        <p><a href="mailto:yaminigaur01@gmail.com">yaminigaur01@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Yamini. I like building (and inevitably breaking) stuff.
        I am a Software Engineer at Citrix, based out of San Francisco, CA.
        I graduated from Virginia Tech with a Master&apos;s degree in Computer Engineering in 2019.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yamini Gaur <Link to="/">yaminig.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
