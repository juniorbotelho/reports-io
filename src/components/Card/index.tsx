import React from "react"

import { Div } from "@Style:Components/Div"
import { SubTitle } from "@Style:Components/Title"
import { Text } from "@Style:Components/Text"

interface HTMLCardProps {
  className: string
  title: string
  body: string
}

export const Card: React.FC<HTMLCardProps> = ({ className, title, body }) => (
  <Div className={className}>
    <Div className="Card_Header">
      <SubTitle className="Card_Header_Title">
        <>{title}</>
      </SubTitle>
    </Div>
    <Div className="Card_Body">
      <Text className="Card_Body_Text">
        <>{body}</>
      </Text>
    </Div>
  </Div>
)
