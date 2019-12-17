/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

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
const NavLinks = props => (
  <li style={{display: `inline-block`}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
  return (
   <>
    <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <ul>
          <NavLinks to="/">Home</NavLinks>
          <NavLink to="/about-me">About Retrojb</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/blog">Blog</NavLink>  
        </ul>
      </div>
  </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
