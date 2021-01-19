import { EventEmitter } from "events"

class Theme extends EventEmitter {}

export const theme = new Theme()
