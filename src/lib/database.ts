import { firestore } from './firebase'
import { UserData } from '@/types/UserData'

export const createUser = async (user: UserData) => {
  const db = firestore.getFirestore()

  const collection = firestore.collection(db, 'users')

  const userRef = firestore.doc(collection)

  return await firestore.setDoc(
    userRef,
    {
      ...user
    },
    {
      merge: true
    }
  )
}
