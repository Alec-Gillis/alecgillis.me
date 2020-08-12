import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>I'm Alec Gillis, a programmer.</p>
            <p>
                I was born and raised in{' '}
                <a href="https://www.michigan.org">the Mitten</a> and I'm
                currently an undergraduate student at{' '}
                <a href="https://msu.edu/">Michigan State University</a>. I will
                be graduating in December 2020 with a degree in computer science
                and a minor in mathematics. Besides programming, I enjoy
                running, reading, listening to music, and learning interesting
                things.
            </p>
        </Layout>
    )
}

export default AboutPage
