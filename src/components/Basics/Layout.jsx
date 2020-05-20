/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import Nav from "./Nav"

import ResetStyles from "./Styles/ResetStyles"
import { GlobalStyles, variables } from "./Styles/GlobalStyles"
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
    <ThemeProvider theme={variables}>
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
