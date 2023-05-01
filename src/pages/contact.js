import React from "react"

import Layout from "../components/layout"
import { Head } from "./index"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <ul>
        <li>Email: gillisa3@msu.edu</li>
        <li>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/alexanderdgillis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alec Gillis
          </a>
        </li>
        <li>
          GitHub:
          <a
            href="https://github.com/Alec-Gillis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alec-Gillis
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactPage
