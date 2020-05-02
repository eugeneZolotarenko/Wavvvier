import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

import { HeaderStyles } from "./Styles/BlocksStyles"

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;1,500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div>
      <h1 className="logo">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
