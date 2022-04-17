// Ejemplo 8: Filtrar una lista por condicional
const scores = [
	{ name: "A", last_name: "agua", score: 95 },
	{ name: "L", score: 98 },
	{ name: "M", score: 80 },
	{ name: "E", score: 50 },
	{ name: "M", score: 85 },
	{ name: "J", score: 100 },
    { name: "K", last_name: "vaca", score: 70},
    { name: "L", last_name: "cabra", score: 81},
]

const scoresGreaterEighty = scores.filter(score => score.score > 70)
console.log("Ejemplo 8: Filtrando elementos por score")
console.log(scoresGreaterEighty)
