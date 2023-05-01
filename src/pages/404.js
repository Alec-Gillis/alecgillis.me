import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <h1>This page does not exist, but you do!</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export const Head = () => <title>404 - Not Found</title>

export default NotFound
