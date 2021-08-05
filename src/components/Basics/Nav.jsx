import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HeaderStyles } from "./Styles/BlocksStyles"

const Header = ({ siteTitle }) => (
  <HeaderStyles>
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
