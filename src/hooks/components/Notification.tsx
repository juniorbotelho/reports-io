import React from "react"

// HookNotification
export const NotificationContext = React.createContext<HookNotification>([])

export const NotificationProvider: React.FC = ({ children }) => {
  const Content: HookNotification = []

  return (
    <NotificationContext.Provider value={Content}>
      {children}
    </NotificationContext.Provider>
  )
}
