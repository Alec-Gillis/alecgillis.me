import React from "react"

import Layout from '../components/layout'
import Head from '../components/head'

const NowPage = () => {
    return (
        <Layout>
            <Head title='Now'/>
            <p>This is a <a href="https://nownownow.com/about">now</a> page.</p> 
            <p>
                I am currently going into my final semester as a Computer Science student at Michigan State University.
                I've recently been programming side projects and began running again.
                I am living in either Brighton or East Lansing depending on the week.
            </p>
            <p>This 'Now' Page was last update on May 5, 2020.</p>
        </Layout>
    )
}

export default NowPage