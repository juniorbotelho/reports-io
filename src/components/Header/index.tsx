import React from "react"
import Link from "next/link"
import { FiMenu } from "react-icons/fi"

import { Header as Container } from "@Style:Components/Header"
import { Title } from "@Style:Components/Title"
import { Div } from "@Style:Components/Div"
import { Nav } from "@Style:Components/Nav"
import { Button } from "@Style:Components/Button"
import { useRouter } from "next/router"

export const Header: React.FC = () => {
  const router = useRouter()

  return (
    <Container className="Header">
      <Div className="Content">
        <Title className="Title">
          <>Rep.io</>
        </Title>

        <Nav className="Navbar">
          <ul className="List">
            <li className="Link">
              <Link href="/docs">
                <a className="Href">Documentation</a>
              </Link>
            </li>
            <li className="Link">
              <Link href="/pricing">
                <a className="Href">Pricing</a>
              </Link>
            </li>
            <li className="Link">
              <Link href="/resources">
                <a className="Href">Resources</a>
              </Link>
            </li>
            <li className="Link">
              <Link href="/blog">
                <a className="Href">Blog</a>
              </Link>
            </li>
          </ul>
        </Nav>
      </Div>

      <FiMenu
        className="Menu"
        onClick={() => console.log("Menu Hamburguer")}
        size={32}
      />

      <Button
        className="Button"
        onClick={() => router.push({ pathname: "/auth/register" })}>
        <span>Get early access</span>
      </Button>
    </Container>
  )
}
