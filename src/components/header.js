import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"

const Header = ({ siteTitle }) => (
  <header>
    <div className="title">
      <h1>
        {siteTitle}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
