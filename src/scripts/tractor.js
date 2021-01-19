import {createCorn} from './seeds/corn.js'
import {createAsparagus} from './seeds/asparagus.js'
import {createPotato} from './seeds/potato.js'
import {createSunflower} from './seeds/sunflower.js'
import {createWheat} from './seeds/wheat.js'
import {createSoybean} from './seeds/soybean.js'
import {addPlant} from './field.js'

export const plantSeeds = (yearlyPlanArray) => {
    if(plan === "Potato") {
        const potatoSeed= createPotato()
        addPlant(potatoSeed)
    }
}