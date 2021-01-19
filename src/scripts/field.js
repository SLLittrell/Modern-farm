
const fieldPlants = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        fieldPlants = fieldPlants.concat(seed)
    }
    else {
        fieldPlants.push(seed);
    }
}

    export const usePlants = () => {
    return fieldPlants
}