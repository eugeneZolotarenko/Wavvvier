/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import Nav from "./Nav"

import ResetStyles from "./Styles/ResetStyles"
import { GlobalStyles, Variables } from "./Styles/GlobalStyles"
import { FooterStyles } from "./Styles/BlocksStyles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Variables}>
      <ResetStyles />
      <GlobalStyles />
      <Nav siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <FooterStyles>
          © {new Date().getFullYear()}, Developed & Designed with ❤️ by
          <a href="https://eugenezolotarenko.github.io/portfolio/">
            Eugene Zolotarenko
          </a>
        </FooterStyles>
      </div>
    </ThemeProvider>
    // </ResetStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
