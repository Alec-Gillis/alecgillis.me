import React from "react"

import Layout from "../components/layout"

const ProjectsPage = () => {
  return (
    <Layout>
      <h2>
        I am currently working at{" "}
        <a href="https://www.gocivilairpatrol.com/">Civil Air Patrol</a> as a
        Database Administrator Intern. In my freetime I have been coding a few
        side projects this summer.
      </h2>
      <p>
        {" "}
        This summer I wanted to start learning React, a JS frontend framework
        for programming Single-Page Applications, & Django/Flask, Python backend
        frameworks.{" "}
      </p>
      <p>
        I'm started learning React by building a simple{" "}
        <a href="https://github.com/Alec-Gillis/ketchup-time">ToDo App</a>. I
        toyed around with React until I had a basic ToDo app, then took a look
        at the source code on <a href="http://todomvc.com/">ToDoMVC</a> as a
        comparison. Secondly, I created this site with{" "}
        <a href="https://www.gatsbyjs.org/">Gatsby</a>, a React-based static
        site generator. Gatsby was really enjoyable to learn and use!
      </p>
      <p>
        I'm diving deeper into python by making a{" "}
        <a href="https://github.com/Alec-Gillis/spotify-util">
          Spotify Utility
        </a>{" "}
        using the PyQt5 and spotipy libraries. I eventually started using Django
        & React to build a site for a payment service. Once I tried to sprinkle
        in some Redux, a React state-management library, I decided I was trying
        to learn too much, too fast. I was overwhelmed trying to learn Django,
        React, & Redux all at the same time. And quite frankly, I didn't need
        all of the fancy front-end frameworks to pull off what I was trying to
        accomplish. Since then I've dropped back to remaking the site using only
        Django + templates.
      </p>
      <p>
        Recruitment season is right around the corner, and having a job lined up
        before I graduate in December 2020 would be ideal. I have begun
        practicing for technical interviews by reading Cracking the Coding
        Interview and by doing daily Leetcode & HackerRank problems.
      </p>
    </Layout>
  )
}

export const Head = () => <title>Projects</title>

export default ProjectsPage
