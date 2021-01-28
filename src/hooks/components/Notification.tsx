import React from "react"

// Types
type Hook = { message: string; seconds?: number }[]

// HookNotification
export const NotificationContext = React.createContext<Hook>([])

export const NotificationProvider: React.FC = ({ children }) => {
  const Content: Hook = []

  return (
    <NotificationContext.Provider value={Content}>
      {children}
    </NotificationContext.Provider>
  )
}
