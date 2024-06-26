import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: ProcessingInstruction.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: ProcessingInstruction.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: ProcessingInstruction.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: ProcessingInstruction.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: ProcessingInstruction.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: ProcessingInstruction.env.REACT_APP_FIREBASE_APP_ID
})

export const auth =app.auth()
export default app