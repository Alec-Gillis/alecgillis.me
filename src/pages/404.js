import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "./index"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>This page does not exist, but you do!</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
