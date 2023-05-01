import React from "react"

import Layout from "../components/layout"
import Head from "./index"

const BooksPage = () => {
  return (
    <Layout>
      <Head title="Books" />
      <h1>
        Woah! This is kinda empty. Quick, pretend that there's cool content.
        Come back later for real thing!{" "}
      </h1>
      <p>
        The plan: I'm an avid reader, especially of nonfiction recently. I want
        have a page for books I read with my notes/rating. Here's{" "}
        <a href="https://sive.rs/book">the inspo</a>, y'all.
      </p>
    </Layout>
  )
}

export default BooksPage
