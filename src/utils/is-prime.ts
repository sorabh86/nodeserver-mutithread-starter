import { start } from "repl"
import { PrimeNumber } from "./types"

export function isPrime(num:number):PrimeNumber {
    let start:Date, end:Date,
        isPrime:boolean = true
    start = end = new Date()

    for(let i =3; i<num; i++) {
        if(num % i === 0) {
            end = new Date()
            isPrime = false
            break
        }
    }

    if(isPrime) 
        end = new Date()

    return {
        number:num,
        isPrime:isPrime,
        time:end.getTime() - start.getTime()
    }
}