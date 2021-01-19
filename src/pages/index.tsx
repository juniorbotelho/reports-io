import React from "react"
import Head from "next/head"

import ReactLogo from "@Assets/React.svg"

import { Home as Container } from "@Style:Pages/Home"

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <ReactLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Communnity.</p>
    </Container>
  )
}

export default Home
