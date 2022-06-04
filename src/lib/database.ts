import { firestore } from './firebase'
import { UserData } from '@/types/UserData'
import { Site } from '@/types'

const db = firestore.getFirestore()

export const createUser = async (user: UserData) => {
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

export const createSite = async (data: Site) => {
  const collection = firestore.collection(db, 'sites')

  const sitesRef = firestore.doc(collection)

  await firestore.setDoc(sitesRef, { ...data })

  return sitesRef
}
