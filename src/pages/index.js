import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
      <Layout>
        <Head title='Home'/>
        <h1>Hello</h1>
        <h2>I'm Alec, a computer science student at Michigan State University.</h2>
        <h4>Click the links on the sidebar to get where you need! This site is a work in progress and was last updated May 15th, 2020. Let me 
          know if something is broken or if it stinks!
        </h4>
      </Layout>
      
  )
}

export default IndexPage