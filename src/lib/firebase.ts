import * as firebaseApp from 'firebase/app'
import * as firebaseAuth from 'firebase/auth'
import * as firestore from 'firebase/firestore'

import {
  APP_ID,
  API_KEY,
  PROJECT_ID,
  AUTH_DOMAIN,
  MEASUREMENT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID
} from '@/constants/auth'

if (!firebaseApp.getApps().length) {
  firebaseApp.initializeApp({
    apiKey: API_KEY,
    projectId: PROJECT_ID,
    authDomain: AUTH_DOMAIN,
    appId: APP_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    measurementId: MEASUREMENT_ID
  })
}

const auth = firebaseAuth.getAuth()

export { auth, firestore, firebaseApp, firebaseAuth }
