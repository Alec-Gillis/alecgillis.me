import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h2>I'm Alec Gillis, a programmer.</h2>
      <h4>
        Click the links on the sidebar to get where you need! This site is a
        work in progress and was last updated August 12th, 2020.
      </h4>
    </Layout>
  )
}

export default IndexPage

export const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <html lang="en" />
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
    </>
  )
}
