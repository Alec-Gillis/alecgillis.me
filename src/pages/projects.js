import React from "react"

import Layout from '../components/layout'
import Head from '../components/head'

const ProjectsPage = () => {
    return (
        <Layout>
            <Head title='Projects'/>
            <h2>I am currently working on a few side projects this summer.</h2> 
            <p>
                I'm learning FrontEnd techniques such as React with my <a href="https://github.com/Alec-Gillis/ketchup-time">Productivity App</a>
				and Gatsby with my personal website(yeah, this one!).
            </p>
            <p>I'm diving deeper into python by making a <a href="https://github.com/Alec-Gillis/spotify-util">Spotify Utility</a>
				using the PyQt5 and spotipy libraries.
			</p>
        </Layout>
    )
}

export default ProjectsPage