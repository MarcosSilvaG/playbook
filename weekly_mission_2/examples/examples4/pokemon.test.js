import Pokemon from "./pokemon"

test("1) Create a new object pokemon", () => {
	const myPokemon = new Pokemon("Charmander")
	expect(myPokemon.name).toBe("Charmander") // Corrige esta prueba
})
