import Head from 'next/head'
import { NextPage } from 'next'
import { Button } from '@chakra-ui/react'

import { useAuthContext } from '@/contexts/AuthContext'
import { FreePlanEmptyState } from '@/components'

const Home: NextPage = () => {
  const { user, signIn, signOut } = useAuthContext()

  return (
    <>
      <Head>
        <title>Fast Feedback</title>
      </Head>

      {!user && <Button onClick={signIn}>Sign in</Button>}

      {user && (
        <>
          <FreePlanEmptyState user={user} />
          <Button onClick={signOut}>Sign out</Button>
        </>
      )}
    </>
  )
}

export default Home
