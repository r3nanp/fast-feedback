import Head from 'next/head'
import { NextPage } from 'next'
import { Button } from '@chakra-ui/react'

import { useAuthContext } from '@/contexts/AuthContext'
import { DashboardShell, SiteEmptyState } from '@/components'

const Home: NextPage = () => {
  const { user, signIn, signOut } = useAuthContext()

  return (
    <>
      <Head>
        <title>Fast Feedback</title>
      </Head>

      {!user && <Button onClick={signIn}>Sign in</Button>}

      {user && (
        <DashboardShell user={user}>
          {/* <FreePlanEmptyState user={user} /> */}
          <SiteEmptyState />
          <Button onClick={signOut}>Sign out</Button>
        </DashboardShell>
      )}
    </>
  )
}

export default Home
