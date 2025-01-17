// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas
const names = ["Asabeneh", "Mathias", "Elias", "Brook", "Marcos"]
const namesToLowerCase = names.map(name => name.toLowerCase())

console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas")
console.log(namesToLowerCase)

const namesToUpperCase = namesToLowerCase.map (name => name.toUpperCase())
console.log(namesToUpperCase)