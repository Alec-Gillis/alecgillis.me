import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title='About'/>
            <h1>About Me</h1>
            <p>
                I'm a student at Michigan State University. I will be graduating in December 2020
                with a Bachelor's Degree in computer science with a minor in mathematics. I enjoy
                running, reading, and learning.          
            </p>
        </Layout>
    )
}

export default AboutPage