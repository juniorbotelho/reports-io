import React from "react"
import Lottie from "react-lottie"
import Validated from "@Asset:Anims/validated.json"

import { Div } from "@Style:Components/Div"
import { Section } from "@Style:Components/Section"
import { SubTitle } from "@Style:Components/Title"
import { Button } from "@Styles/components/Button"
import { Text } from "@Styles/components/Text"

const Finish: React.FC = () => (
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
      width={150}
      height={150}
    />

    <SubTitle className="FinishedLoaded">
      Your account has been successfully validated
    </SubTitle>

    <Text className="FinishedText">
      Now that your account has been successfully validated, you will be able to
      take advantage of all the resources that the platform can provide in this
      initial phase of development,
    </Text>

    <Div className="FinishedDivisor">
      <Button className="Button">Continue</Button>
    </Div>
  </Section>
)

export default Finish
