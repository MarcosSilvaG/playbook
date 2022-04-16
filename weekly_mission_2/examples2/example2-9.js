// Ejemplo  9: Herencia entre dos clases
class Developer {
	constructor(name, mainLang, stack) {
		this.name = name
		this.mainLang = mainLang
		this.stack = stack
	}

	get getName() {
		return this.name
	}
}

console.log("Ejemplo  9: Herencia entre dos clases")
const marcosDev = new Developer("Marcos", "js", ["Node", "Vuejs", "Python"])
console.log(marcosDev)

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer {}

const marcosLaunchXDev = new LaunchXStudent("Marcos", "js", [
	"Vuejs",
	"Node",
	"Python",
])
console.log(marcosLaunchXDev)
console.log(marcosLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija
