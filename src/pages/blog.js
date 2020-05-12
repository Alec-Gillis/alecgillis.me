import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '../components/header'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            
                        }
                    }
                }
            }
        }
    `)
    
    return (
        <div>
            <Header />
            <h1>Blogs</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>TODO: Extract date from filename & display here</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default BlogPage