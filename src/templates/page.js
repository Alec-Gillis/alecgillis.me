import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
            }
            html
        }
    }
`
// This doesn't do anything yet. I want to convert the about/contact/index/now page to .md, then have all of the
// layout come from this page. Then there will only be 4 .js pages (index, blog, book, 404)
const Page = props => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title} />
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div
                dangerouslySetInnerHTML={{
                    __html: props.data.markdownRemark.html,
                }}
            ></div>
        </Layout>
    )
}

export default Page
