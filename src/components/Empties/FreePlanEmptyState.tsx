import { UserData } from '@/types/UserData'
import { Heading, Box, Text, Button } from '@chakra-ui/react'

import { DashboardShell } from '../DashboardShell'

export const FreePlanEmptyState = ({ user }: { user: UserData }) => (
  <DashboardShell user={user}>
    <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
      <Heading size="md">Get feedback on your site instantly.</Heading>
      <Text>Start today, then grow with us 🌱</Text>
      <Button mt={4}>Upgrade to Starter</Button>
    </Box>
  </DashboardShell>
)
