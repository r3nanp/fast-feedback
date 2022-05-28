import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react'
import { auth, firebaseAuth } from '@/lib/firebase'
import { createUser } from '@/lib/database'
import { handleFormatUser } from '@/handlers'
import { UserData } from '@/types/UserData'

type AuthContextData = {
  user: UserData | null
  isLoading: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

type AuthContextProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleUser = async (userData: firebaseAuth.User | null) => {
    if (!userData) {
      setUser(null)
      setIsLoading(false)
      return false
    }

    const formattedUser = await handleFormatUser(userData)

    await createUser(formattedUser)

    setUser(formattedUser)

    setIsLoading(false)
    return formattedUser
  }

  const signIn = useCallback(async () => {
    const githubAuth = new firebaseAuth.GithubAuthProvider()
    githubAuth.addScope('repo')

    const data = await firebaseAuth.signInWithPopup(auth, githubAuth)

    handleUser(data.user)
  }, [])

  const signOut = useCallback(async () => {
    await handleUser(null)
    await firebaseAuth.signOut(auth)
  }, [])

  return (
    <AuthContext.Provider value={{ isLoading, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context)
    throw new Error('useAuthContext must be used within AuthContext')

  return context
}
