// Ejemplo 7: Uso de filter para filtrar una lista de elementos
// Los elementos deben ser perfect match para poder ser filtrados.
const countries7 = ["Finland", "Denmark", "Sweden", "Norway", "Iceland", "Albania", "Mexico", "Colombia"]
const countriesContainingLand = countries7.filter(
	(
		country // esta es una función
	) => country.includes("land") // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log("Ejemplo 7: Paises que incluyan 'land'")
console.log(countriesContainingLand)

const countriesEndsByia = countries7.filter(country => country.endsWith("ia"))
console.log("Ejemplo 7: Paises que terminan en 'ia'")
console.log(countriesEndsByia)
