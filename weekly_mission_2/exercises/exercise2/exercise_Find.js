import { explorers } from './explorers_list.js'

// find explorer by location with find method
const explorerLocation = explorers.find(location => location.city == "CDMX")

console.log(explorerLocation)