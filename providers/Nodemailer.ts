import { createTransport } from "nodemailer"

// Namespaces
namespace Nodemailer {
  export type MailOptions = import("nodemailer/lib/smtp-transport").Options
  export type Mail = import("nodemailer/lib/mailer")
}

export class Nodemailer {
  /**
   * Initial configuration on environment variables for
   * developing emails and handling messages.
   */
  private emailConfig: Nodemailer.MailOptions = {
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  }

  /**
   * Private attribute that receives the connection
   * instance/object defined in the provider's
   * constructor.
   */
  public transporter: Nodemailer.Mail = null

  constructor() {
    this.transporter = createTransport(this.emailConfig)
  }
}
