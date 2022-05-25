import { firestore } from './firebase'

export type UserData = {
  id: string
  name: string | null
  provider: string | null
  email: string | null
  image: string | null
}

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
