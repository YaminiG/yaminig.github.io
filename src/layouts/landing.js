import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet titleTemplate="%s | Yamini Gaur" defaultTitle="Yamini Gaur">
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <div id="main">
        {props.children}
      </div>
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  title: null,
  description: "Yamini Gaur's personal website.",
};

export default Main;
