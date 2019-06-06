import { SHA1 } from "./mod.ts"

const hash: Uint8Array = new SHA1().update("").digest()
console.log(`hash of "" using a SHA1 instance: ${hash}`)
console.log(`hash of "" using SHA1.hash: ${SHA1.hash("")}`)
