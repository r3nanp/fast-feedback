import * as firebaseApp from 'firebase/app'
import * as firebaseAuth from 'firebase/auth'

import { API_KEY, AUTH_DOMAIN, PROJECT_ID } from '@/constants/auth'

if (!firebaseApp.getApps().length) {
  firebaseApp.initializeApp({
    apiKey: API_KEY,
    projectId: PROJECT_ID,
    authDomain: AUTH_DOMAIN
  })
}

export { firebaseApp, firebaseAuth }
