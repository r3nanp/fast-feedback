import { NextPage } from 'next'
import { useAuthContext } from '@/contexts/AuthContext'

const Home: NextPage = () => {
  const { user, signIn } = useAuthContext()

  return (
    <div className="">
      <button onClick={signIn}>Sign in</button>

      {user && user.email}
    </div>
  )
}

export default Home
