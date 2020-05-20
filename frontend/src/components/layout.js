/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import './layout.scss'

import Header from "./header"


const Layout = ({ children }) => {

  return (
    <div>
    <Header  />
    <div className="container">
      
{children}
</div>
</div>
  )

}
export default Layout
