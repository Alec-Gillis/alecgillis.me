import React from "react"

import Layout from "../components/layout"

/*export const Head = ({ title }) => {
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
      <title>Home</title>
    </>
  )
}
*/

const IndexPage = () => {
  return (
    <Layout>
      <h2>I'm Alec Gillis, a programmer.</h2>
      <h4>
        Click the links on the sidebar to get where you need! This site is a
        work in progress and was last updated August 12th, 2020.
      </h4>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
