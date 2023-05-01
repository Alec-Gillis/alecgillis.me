import React from "react"

import Header from "./header"
import * as layoutStyles from "./layout.module.scss"

export const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className={layoutStyles.container}>{props.children}</div>
    </div>
  )
}

export default Layout
