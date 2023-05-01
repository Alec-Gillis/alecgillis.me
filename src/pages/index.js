import React from "react"

import { Layout } from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I'm Alec Gillis, a programmer.</p>
      <p>
        I was born and raised in{" "}
        <a href="https://www.michigan.org">the Mitten</a> and I'm currently
        living in Chattanooga, TN. I graduated from{" "}
        <a href="https://msu.edu/">Michigan State University</a>
        with a degree in computer science and a minor in mathematics. Besides
        programming I enjoy running, reading, listening to music, and learning
        interesting things.
      </p>
    </Layout>
  )
}

export const Head = () => <title>Home</title>

export default IndexPage
