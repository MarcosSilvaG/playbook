const explorers = [
	{
		name: "Explorer 1",
		exercises_completed: 10,
		rate: 99,
		city: "CDMX",
		stack: ["js", "c#"],
		missions: {
			onboarding: {
				isFinished: true,
				exercisesFinished: true,
			},
			frontend: {
				isFinished: true,
				exercisesFinished: true,
			},
		},
	},
	{
		name: "Explorer 2",
		exercises_completed: 9,
		city: "Veracruz",
		rate: 50,
		stack: ["js"],
		missions: {
			onboarding: {
				isFinished: false,
				exercisesFinished: false,
			},
			frontend: {
				isFinished: false,
				exercisesFinished: false,
			},
		},
	},
	{
		name: "Explorer 3",
		exercises_completed: 3,
		city: "Sonora",
		rate: 100,
		stack: ["elixir"],
		missions: {
			onboarding: {
				isFinished: true,
				exercisesFinished: true,
			},
			frontend: {
				isFinished: false,
				exercisesFinished: false,
			},
		},
	},
]
export { explorers }