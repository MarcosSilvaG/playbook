import { explorers } from './explorers_list.js'

// sum of all exercises completed
const  newExercisesCompleted = explorers.map(exercise => exercise.exercises_completed)
const totalExercisesCompleted = newExercisesCompleted.reduce((previousValue, currentValue) => previousValue + currentValue,0)

console.log(totalExercisesCompleted)