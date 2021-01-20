// Handle exception server
export class ErrorServerConnection {
  constructor(error: Error) {
    throw error
  }
}
