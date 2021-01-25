import React, { useState } from "react"
import Head from "next/head"

import { Login as LoginContainer } from "@Style:Pages/Login"

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

import { NotificationProvider } from "@Hook:Components/Notification"

const Login: React.FC = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Head>
        <title>Reports.io/Login</title>
      </Head>

      <NotificationProvider>
        {toggle && (
          <Div className="NotificationContainer">
            <Notification />
          </Div>
        )}

        <LoginContainer>
          <Section className="Section_Register">
            <Section className="Section_Register Message">
              <Title className="Title_Register Minor">Reports.io</Title>
              <Title className="Title_Register">Log in to our platform to be.</Title>
            </Section>

            <Section className="Section_Register Form">
              <Form className="Form_Register" action="/users/signin" method="POST">
                <Label htmlFor="email" className="Label_Register Label_Input">
                  <Span className="Span_Register">Email or Username:</Span>
                  <Input className="Input_Register" type="text" name="email" placeholder="Email or Username" />
                </Label>

                <Label htmlFor="password" className="Label_Register Label_Input">
                  <Span className="Span_Register">Password:</Span>
                  <Input className="Input_Register" type="password" name="password" placeholder="Password" />
                </Label>

                <Label className="Label_Register Label_Undo Only">
                  <Link href="#" className="Link_Register">
                    Forgot password?
                  </Link>
                </Label>

                <Button type="submit" className="Button" onClick={() => setToggle(true)}>
                  Register
                </Button>
              </Form>
            </Section>
          </Section>
        </LoginContainer>
      </NotificationProvider>
    </>
  )
}

export default Login
