import Head from 'next/head'
import { NextPage } from 'next'
import { Avatar, Button, Flex, Heading } from '@chakra-ui/react'

import { useAuthContext } from '@/contexts/AuthContext'

const Home: NextPage = () => {
  const { user, signIn, signOut } = useAuthContext()

  return (
    <Flex
      h="full"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>

      {!user && <Button onClick={signIn}>Sign in</Button>}

      {user && (
        <Flex
          as="header"
          w="full"
          py={[2, 4]}
          px={[6, 8]}
          borderBottom="1px"
          borderColor="blue.200"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading as="h2">{user.displayName}</Heading>

          <Avatar
            src={user.photoURL || undefined}
            name={user.displayName || undefined}
          />
        </Flex>
      )}

      {user && <Button onClick={signOut}>Sign out</Button>}
    </Flex>
  )
}

export default Home
