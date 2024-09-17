import {Queue} from "../dist/bundle.esm.js";
import * as readline from "node:readline/promises"; // This uses the promise-based APIs
import { stdin as input, stdout as output } from "node:process";

import { BinarySearchTree } from "../dist/bundle.esm.js";

const bst = new BinarySearchTree(10)

console.log(bst.search(10))

const rl = readline.createInterface({ input, output });

let running = true  

const q = new Queue()
let next = 1

console.log("Welcome to the queue tracker");
while(running) {
    const answer = await rl.question("press A to add to the queue press R to remove the front of the line or X to exit")
    
    if (answer.toLowerCase() === "a") {
        q.enqueue(next);
    }
    else if(answer.toLowerCase() === "r") {
        console.log(`Next Up ${q.dequeue()}!`)
    }
    else if(answer.toLowerCase() === "x") {
        running = false
    }

}


