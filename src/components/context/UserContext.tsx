import React, { createContext, useState } from 'react';

export type AuthUser = {
  name: string,
  email: string
}

type UserProps = {
  children: React.ReactNode
}

type UserContextType = {
  user: AuthUser | null,
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext({} as UserContextType)

const UserContextProvider = ({children}: UserProps) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
