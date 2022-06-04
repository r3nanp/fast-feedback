import { Flex, Heading } from '@chakra-ui/react'
import { AddSiteModal } from '../AddSiteModal'

export const SiteEmptyState = () => {
  return (
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading size="lg" mb={2}>
        You haven’t added any sites.
      </Heading>

      <AddSiteModal>Add your first site</AddSiteModal>
    </Flex>
  )
}
