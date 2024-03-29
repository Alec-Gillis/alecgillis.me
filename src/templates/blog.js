import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import moment from "moment"
import * as path from "path"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
      fileAbsolutePath
    }
  }
`

const Blog = (props) => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>
        {moment(
          Date(
            path
              .basename(props.data.markdownRemark.fileAbsolutePath)
              .substr(0, 10)
          )
        ).format("MMMM do, yyyy")}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Blog
