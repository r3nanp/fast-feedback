import { UserData } from '@/lib/database'
import { firebaseAuth } from '@/lib/firebase'

export const handleFormatUser = (
  firebaseUser: firebaseAuth.User
): UserData => ({
  id: firebaseUser.uid,
  name: firebaseUser.displayName,
  provider: firebaseUser.providerData[0].providerId,
  email: firebaseUser.email,
  image: firebaseUser.photoURL
})
