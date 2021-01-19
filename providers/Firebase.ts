// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app"

/**
 * Instance connection from Firebase
 * class model
 */
let connection: Firebase

export function createConnection() {
  connection = new Firebase()
}

export function getConnection() {
  return connection
}

export function getRepository(Constructor: ObjectConstructor) {
  class Repository extends Constructor {}

  // Returns an instance from this
  return new Repository()
}

export class Firebase {
  /**
   * Firebase configuration
   * model from credentials
   */
  private firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
  }

  private firebase = firebase.default

  /**
   * Public attributes from this instance,
   * and make all Firebase attrs
   */
  public auth = this.firebase.auth
  public database = this.firebase.database
  public firestore = this.firebase.firestore
  public storage = this.firebase.storage

  constructor() {
    this.firebase.initializeApp(this.firebaseConfig)
    this.firebase.analytics()
  }
}
