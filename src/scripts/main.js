console.log("Welcome to the main module")

import {createPlan} from './plan.js'
import {createCorn} from './seeds/corn.js'
import { createAsparagus } from "./seeds/asparagus.js"
import {usePlants} from './field.js'

createPlan()
const yearlyPlan = createPlan()
console.log(yearlyPlan)



const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

console.log("fieldArray", usePlants())