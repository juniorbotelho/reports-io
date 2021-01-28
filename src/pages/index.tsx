import React from "react"
import Head from "next/head"

import { Container } from "@Style:Pages/Home"
import { Header } from "@Components/Header"

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Header />
    </Container>
  )
}

export default Home
