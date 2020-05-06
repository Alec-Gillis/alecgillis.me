import React from "react"
import Header from "../components/header"
import MasterHead from "../components/masterhead"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <MasterHead />
      <h1>Hello Gatsby!</h1>
      <Header headerText="About Gatsby" />
      <p>What a world.</p>
    </div>
  );
}