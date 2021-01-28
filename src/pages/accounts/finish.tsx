import React from "react"
import Head from "next/head"
import Lottie from "react-lottie"
import Validated from "@Asset:Anims/validated.json"

import { Section } from "@Style:Components/Section"
import { SubTitle } from "@Style:Components/Title"
import { Text } from "@Styles/components/Text"

const Finish: React.FC = () => (
  <>
    <Head>
      <title>Reports.io - Account Finish</title>
    </Head>

    <Section className="Section_Loading Finish">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: Validated,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        }}
        width={250}
        height={250}
      />

      <SubTitle className="FinishedLoaded">
        Your account has been successfully validated
      </SubTitle>

      <Text className="FinishedText">
        Now that your account has been successfully validated, you will be able
        to take advantage of all the resources that the platform can provide in
        this initial phase of development,
      </Text>
    </Section>
  </>
)

export default Finish
