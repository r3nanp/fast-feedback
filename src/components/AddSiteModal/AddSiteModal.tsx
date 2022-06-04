import { FC, ReactNode } from 'react'
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Site } from '@/types'
import { useAuthContext } from '@/contexts/AuthContext'
import { createSite } from '@/lib/database'

export const AddSiteModal: FC<{ children: ReactNode }> = ({ children }) => {
  const { onClose, onOpen, isOpen } = useDisclosure()
  const toast = useToast()
  const { user } = useAuthContext()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<Site>()

  const onSubmit: SubmitHandler<Site> = async ({ name, url }) => {
    const newSite = {
      authorId: user?.id,
      createAt: new Date().toISOString(),
      name,
      url,
      settings: {
        icons: true,
        timestamp: true,
        ratings: true
      }
    }

    await createSite(newSite)

    toast({
      title: 'Success!',
      description: "We've added your site.",
      status: 'success',
      duration: 5000,
      isClosable: true
    })

    onClose()
  }

  return (
    <>
      <Button
        id="add-site-modal-button"
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        {children}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                {...register('name', {
                  required: 'Required'
                })}
                id="site-input"
                placeholder="My site"
                name="name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                {...register('url', { required: 'Required' })}
                id="link-input"
                placeholder="https://website.com"
                name="url"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              id="create-site-button"
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
              isLoading={isSubmitting}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
