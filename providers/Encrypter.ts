import CryptoJS from "crypto-js"

export class Encrypter {
  // Hashs
  private hashAes = null
  private base64 = null
  private decrypted = null

  constructor(private privateKey: string) {
    this.privateKey = privateKey
  }

  /**
   * Encode content data from object to JSON after
   * to AES and to base64
   */
  public getEncryptedHash(content: any) {
    this.hashAes = CryptoJS.AES.encrypt(
      JSON.stringify(content),
      this.privateKey
    )

    // Returns an encoded base64 with AES encrypted data
    this.base64 = Buffer.from(this.hashAes.toString()).toString("base64")
    return this.base64
  }

  /**
   * Decrypt content data from base64 to AES after
   * to JSON and to object
   */
  public getDecryptedHash(base64: string) {
    const decodeBase64 = Buffer.from(base64, "base64").toString()
    const decryptAes = CryptoJS.AES.decrypt(decodeBase64, this.privateKey)

    // Returns decrypted object
    this.decrypted = JSON.parse(decryptAes.toString(CryptoJS.enc.Utf8))
    return this.decrypted
  }
}
