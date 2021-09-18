import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { HeaderStyles } from './Styles/BlocksStyles';

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <div>
      <h1 className="logo">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <a
      target="_blank"
      rel="noreferrer"
      className="github-link"
      href="https://github.com/eugeneZolotarenko/Wavvvier"
    >
      ⭐️ Star it on Github
    </a>
  </HeaderStyles>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
