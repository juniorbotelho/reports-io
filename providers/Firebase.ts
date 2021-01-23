// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase"

/**
 * This is abstract function to transform a class
 * in an repository model likes active records.
 *
 * @param Base - Constructor from model
 */
export function getRepository<T extends Constructor<{}>>(Base: T) {
  return class extends Base {}
}

export class Firebase {
  /**
   * Static connection of this
   * context instance
   */
  private static connection: Firebase = null

  public static async createConnection() {
    try {
      await new Firebase().connect()
      return Promise.resolve(Firebase.getConnection())

      // Catch
    } catch (error) {
      throw Promise.reject(error)
    }
  }

  public static getConnection() {
    return this.connection
  }

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

  private firebase = firebase

  /**
   * Public attributes from this instance,
   * and make all Firebase attrs
   */
  public auth = this.firebase.auth
  public database = this.firebase.database
  public firestore = this.firebase.firestore
  public storage = this.firebase.storage

  // TODO: Fix problem with .analytics instanced by this.firebase
  public async connect() {
    try {
      this.firebase.initializeApp(this.firebaseConfig)
      Firebase.connection = this

      return Promise.resolve(this)

      // Error
    } catch (error) {
      throw Promise.reject(error)
    }
  }
}
