import React from "react"
import Head from "next/head"

import { Register as RegisterContainer } from "@Style:Pages/Register"

import { Form } from "@Components/Form"
import { Input } from "@Components/Input"
import { Notification } from "@Components/Notification"

import { Div } from "@Style:Components/Div"
import { Title } from "@Style:Components/Title"
import { Span } from "@Style:Components/Span"
import { Label } from "@Style:Components/Label"
import { Button } from "@Style:Components/Button"
import { Link } from "@Style:Components/Link"
import { Section } from "@Style:Components/Section"

const Register: React.FC = () => {
  return (
    <>
      <Head>
        <title>Reports.io/Register</title>
      </Head>

      <Div className="NotificationContainer">
        <Notification
          message="An error occurred while trying to register. The email you entered is
already in use."
        />
      </Div>

      <RegisterContainer>
        <Section className="Section_Register">
          <Section className="Section_Register Message">
            <Title className="Title_Register Minor">Reports.io</Title>
            <Title className="Title_Register">
              Register on our platform and join us.
            </Title>
          </Section>

          <Section className="Section_Register Form">
            <Form
              className="Form_Register"
              action="/users/signup"
              method="POST"
            >
              <Label htmlFor="email" className="Label_Register Label_Input">
                <Span className="Span_Register">Email:</Span>
                <Input
                  className="Input_Register"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </Label>

              <Label htmlFor="username" className="Label_Register Label_Input">
                <Span className="Span_Register">Username:</Span>
                <Input
                  className="Input_Register"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </Label>

              <Label htmlFor="password" className="Label_Register Label_Input">
                <Span className="Span_Register">Password:</Span>
                <Input
                  className="Input_Register"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Label>

              <Label htmlFor="password" className="Label_Register">
                <Span className="Span_Register">Confirm Password:</Span>
                <Input
                  className="Input_Register"
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                />
              </Label>

              <Label className="Label_Register Label_Undo">
                <Link href="#" className="Link_Register">
                  Forgot password?
                </Link>
              </Label>

              <Button type="submit" className="Button">
                Register
              </Button>
            </Form>
          </Section>
        </Section>
      </RegisterContainer>
    </>
  )
}

export default Register
