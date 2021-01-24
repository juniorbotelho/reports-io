import React, { useEffect, useState } from "react"

import { Div } from "@Style:Components/Div"
import { Text } from "@Style:Components/Text"

interface HTMLNotificationProps {
  seconds?: number
  message: string
}

export const Notification: React.FC<HTMLNotificationProps> = (props) => {
  const { seconds, message } = props
  const [time, setTime] = useState(0)

  useEffect(() => {
    const progress = { line: 100 }

    const interval = setInterval(() => {
      const load = progress.line--

      setTime(load)

      if (load === 0) {
        clearInterval(interval)
      }
    }, seconds || 60)
  }, [])

  return (
    <>
      {time !== 0 && (
        <Div className="Notification">
          <Div className="Progress">
            <Div className="Bar" style={{ width: `${time}%` }}></Div>
          </Div>

          <Text className="Text">{message}</Text>
        </Div>
      )}
    </>
  )
}
