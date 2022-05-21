import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { auth, firebaseAuth } from '@/lib/firebase'

type AuthContextData = {
  user: firebaseAuth.User | null
  signIn: () => Promise<firebaseAuth.User>
  signOut: () => Promise<void>
}

type AuthContextProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<firebaseAuth.User | null>(null)

  const signIn = useCallback(async () => {
    const githubAuth = new firebaseAuth.GithubAuthProvider()
    githubAuth.addScope('repo')

    const data = await firebaseAuth.signInWithPopup(auth, githubAuth)

    setUser(data.user)

    return data.user
  }, [])

  const signOut = useCallback(async () => {
    await firebaseAuth.signOut(auth)

    setUser(null)
  }, [])

  // useEffect(() => {}, [])

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
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
