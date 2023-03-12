// import { exit, send, on } from "process"
import { isPrime } from "./utils/is-prime"
import { ChildRequest } from './utils/types'

process.on("message", (msg:ChildRequest) => {
    const jsonRes = isPrime(msg.value)
    process.send?.(jsonRes)
    process.exit()
})