import React from "react"
import Head from "next/head"

import { Register as Container } from "@Style:Pages/Register"

import { Form } from "@Components/Form"
import { Input } from "@Components/Input"

import { Title } from "@Style:Components/Title"
import { Span } from "@Style:Components/Span"
import { Label } from "@Style:Components/Label"
import { Button } from "@Style:Components/Button"
import { Link } from "@Style:Components/Link"

const Register: React.FC = () => {
  return (
    <>
      <Head>
        <title>Reports.io/Register</title>
      </Head>

      <Container>
        <Title className="Title_Register">Register</Title>

        <Form className="Form_Register" action="/users/signup" method="POST">
          <Label htmlFor="email" className="Label_Register">
            <Span className="Span_Register">Email:</Span>
            <Input
              className="Input_Register"
              type="text"
              name="email"
              placeholder="Email"
            />
          </Label>

          <Label htmlFor="username" className="Label_Register">
            <Span className="Span_Register">Username:</Span>
            <Input
              className="Input_Register"
              type="text"
              name="username"
              placeholder="Username"
            />
          </Label>

          <Label htmlFor="password" className="Label_Register">
            <Span className="Span_Register">Password:</Span>
            <Input
              className="Input_Register"
              type="password"
              name="password"
              placeholder="Password"
            />
          </Label>

          <Label className="Label_Register Label_Undo">
            <Link href="#" className="Link_Register">
              Forgot password?
            </Link>
          </Label>

          <Button type="submit" className="Button_Register">
            Register
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Register
