import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import next from "next"

import { ErrorServerConnection } from "@Provider:Errors/Server"

const environment = process.env.NODE_ENV !== "production"
const app = next({ dev: environment })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

// Handle method execution
function Exec() {
  return (Target: { new (): Server }) => {
    new Target()
      .connect()
      .then((status) => status)
      .catch((error) => new ErrorServerConnection(error))
  }
}

@Exec()
export class Server {
  public async connect() {
    try {
      await app.prepare()
      const server = express()
        .use(bodyParser.json({ limit: "24mb" }))
        .use(bodyParser.urlencoded({ extended: true }))

      // Bind next handler to express
      server.all("*", (request: Request, response: Response) => {
        return handle(request, response)
      })

      server.listen(port, (error?: Error) => {
        if (error) throw new ErrorServerConnection(error)
      })
    } catch (error) {
      throw new ErrorServerConnection(error)
    }
  }
}
