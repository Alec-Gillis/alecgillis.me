import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'
import moment from 'moment'
import * as path from 'path'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            layout
                        }
                        fields {
                            slug
                        }
                        fileAbsolutePath
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title='Blog'/>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges
                .filter( edge => edge.node.frontmatter.layout === "post")
                .map( edge => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                            </Link>
                            <p>{moment(Date(path.basename(edge.node.fileAbsolutePath).substr(0,10))).format("MMMM do, yyyy")}</p>

                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage