import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Lottie from "react-lottie"

import { Section } from "@Style:Components/Section"
import { Div } from "@Style:Components/Div"
import { Button } from "@Style:Components/Button"

import { Card } from "@Components/Card"

import animData from "@Asset:Anims/notifications.json"
import animLoad from "@Asset:Anims/loading.json"

const Validation: React.FC = () => {
  const [data, setData] = useState({ email: "", username: "" })
  const [card, setCard] = useState({ title: "", body: "" })
  const [load, setLoad] = useState(false)

  const router = useRouter()
  const { info: encodedBase64 } = router.query

  useEffect(() => {
    if (encodedBase64) {
      try {
        const decodedBase64 = Buffer.from(
          String(encodedBase64),
          "base64"
        ).toString()

        // Defined data
        setData(JSON.parse(decodedBase64))
      } catch (error) {
        // Expect error wether encodedBase64 is not base64
        console.error("decodedBase64::IsNotBase64TypeValid", error)
      }
    } else {
      setLoad(true)
    }
  }, [encodedBase64])

  useEffect(() => {
    if (data.email && data.username) {
      const title = `Hi ${data.username}, all ready to start?`
      const body = `Now you just need to check your email inbox to validate your account and you will be able to take advantage of all the platform's features.`

      // Defined card
      setCard({ title, body })
      setLoad(false)
    }
  }, [data])

  return (
    <>
      {load && (
        <Section className="Section_Loading">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animLoad,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            width={300}
            height={300}
          />
        </Section>
      )}
      {!load && (
        <Section className="Section_Validation">
          <Div>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
                }
              }}
              width={350}
              height={300}
            />

            <Card
              className="Card Information"
              title={card.title}
              body={card.body}
            />
            <Button type="submit" className="Button Button_Card">
              Get started
            </Button>
          </Div>
        </Section>
      )}
    </>
  )
}

export default Validation
