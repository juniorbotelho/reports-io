import React, { useContext, useEffect, useState } from "react"

import { Div } from "@Style:Components/Div"
import { Text } from "@Style:Components/Text"

import { NotificationContext } from "@Hook:Components/Notification"

export const Notification: React.FC<HTMLNotificationProps> = ({ seconds }) => {
  const [time, setTime] = useState(0)
  const [toggle, setToggle] = useState(false)

  const contentContext = useContext(NotificationContext)

  useEffect(() => {
    setTimeout(() => {
      if (contentContext.length >= 1) {
        setToggle(!toggle)
      }
    }, 200)
  }, [])

  useEffect(() => {
    const progress = { line: 100 }
    const interval = setInterval(() => {
      const load = progress.line--

      setTime(load)
      if (load === 0) clearInterval(interval)
    }, seconds || 80)
  }, [])

  return (
    <Div>
      {toggle && time !== 0 && (
        <Div>
          {contentContext.map((notification, idx) => (
            <Div className="Notification" key={idx}>
              <Div className="Progress">
                <Div className="Bar" style={{ width: `${time}%` }}></Div>
              </Div>

              <Text className="Text">{notification.message}</Text>
            </Div>
          ))}
        </Div>
      )}
    </Div>
  )
}
