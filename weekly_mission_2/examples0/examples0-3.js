// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
	name: "Pantera",
	age: 2,
	nicknames: ["Negrita", "Panterita", "Panterua"],
	address: {
		zip_code: "99999999",
		street: "Benito Juarez N° 6",
		city: "Oaxaca",
	},
};
console.log("Ejemplo 3: Objeto con diferentes propiedades");
console.log(myObject3);
console.log(myObject3.name);
console.log(myObject3["address"]);
console.log(myObject3.nicknames[1])
