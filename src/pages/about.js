import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title='About'/>
            <h1>About Me</h1>
            <p>
                Born and raised in the Mitten.
            </p>
            <p>
                I'm a undergraduate student at Michigan State University.
                I will be graduating in December 2020
                with a degree in computer science with a minor in mathematics. I enjoy
                running, reading, music, and learning.          
            </p>
            <h3>TIME LINE</h3>
            <ul>
                <li>1998: born in Michigan</li>
                <li>2017: started at Michigan State University in East Lansing</li>
            </ul>
        </Layout>
    )
}

export default AboutPage