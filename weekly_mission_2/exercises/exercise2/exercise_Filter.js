import {explorers } from './explorers_list.js'

// Find explorers with JS includes in their stack.
const jsStack = explorers.filter( explorer => explorer.stack.includes("js"))
console.log(jsStack)