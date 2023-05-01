import React from "react"

import Layout from "../components/layout"
import { Head } from "./index"

const NowPage = () => {
  return (
    <Layout>
      <Head title="Now" />
      <p>
        This is a <a href="https://nownownow.com/about">now</a> page.
      </p>
      <p>
        I am currently going into my final semester as a Computer Science
        student at Michigan State University. I've recently been programming
        side projects, scuba diving, and spending time with friends and family.
        I am living in Brighton with my family until the Fall semester starts.
      </p>
      <p>
        This 'Now' Page was last updated on August 12, 2020, in Brighton, MI.
      </p>
    </Layout>
  )
}

export default NowPage
