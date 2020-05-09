import React from 'react'
import { Link } from 'gatsby'
//import Header from "../components/header"
//import MasterHead from "../components/masterhead"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>I'm Alec, a computer science student at Michigan State University.</h2>
      <Link to="/about">About Me</Link>
    </div>
  )
}


export default IndexPage