import Link from 'next/link'
import { Flex, Link as ChakraLink, Avatar, Box } from '@chakra-ui/react'
import { DashboardShellProps } from './dashboardShell.types'
import { Logo } from '../icons'

export const DashboardShell = ({ user, children }: DashboardShellProps) => {
  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex
        backgroundColor="white"
        mb={[8, 16]}
        w="full"
        borderTop="5px solid #0AF5F4"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="60px"
        >
          <Flex align="center">
            <Link href="/" passHref>
              <ChakraLink>
                <Logo width={24} height={24} />
              </ChakraLink>
            </Link>
            <Link href="/sites" passHref>
              <ChakraLink mx={4}>Sites</ChakraLink>
            </Link>
            <Link href="/feedback" passHref>
              <ChakraLink>Feedback</ChakraLink>
            </Link>
          </Flex>

          <Flex justifyContent="center" alignItems="center">
            <Link href="/account" passHref>
              <ChakraLink>
                <Avatar
                  size="sm"
                  name={user.name || undefined}
                  src={user.image || undefined}
                />
              </ChakraLink>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        {children}
      </Flex>
    </Box>
  )
}
