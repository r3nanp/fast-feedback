import { firebaseAuth } from '@/lib/firebase'
import { UserData } from '@/types/UserData'

export const handleFormatUser = async (
  firebaseUser: firebaseAuth.User
): Promise<UserData> => {
  const token = await firebaseUser.getIdToken()

  return {
    id: firebaseUser.uid,
    name: firebaseUser.displayName,
    provider: firebaseUser.providerData[0].providerId,
    email: firebaseUser.email,
    image: firebaseUser.photoURL,
    token
  }
}
