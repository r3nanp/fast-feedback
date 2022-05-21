import { createContext, ReactNode, useState } from 'react'
import { firebaseAuth } from '@/lib/firebase'

type AuthContextData = {
  user: any
}

type AuthContextProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<firebaseAuth.User | null>(null)

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
