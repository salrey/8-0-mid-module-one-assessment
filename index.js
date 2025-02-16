/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */
function getTotalCount(animals) {
  // 1. Default Value and Output 
  let totalAnimals = 0;
  // 2. Define the loop 
  for (let i = 0; i < animals.length; i++) {
    // 3. Accumulate
    const animal = animals[i]
    totalAnimals += animal.count
  }

  return totalAnimals
}


// console.log(getTotalCount(animals))
// console.log(getTotalCount([]));

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
function getAllKinds(animals) {
  // 1. Default Value and Output 
  let allAnimals = []
  // 2. Define the loop
  for (let i = 0; i < animals.length; i++) {
    // 3. Accumulate!
    const animal = animals[i]
    allAnimals.push(animal.kind)
  }

  return allAnimals
}


// console.log(getAllKinds(animals))
// console.log(getAllKinds([]))

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
function filterByCountMinimum(animals, minimum) {
  // 1. Default Value and Output 
  let atLeast = []
  // 2. Define the loop 
  for (let i = 0; i < animals.length; i++) {
    // 3. Accumulate 
    const animal = animals[i]
    if (animal.count >= minimum) {
      atLeast.push(animal)
    }
  }

  return atLeast
}


// console.log(filterByCountMinimum(animals, 5));
// console.log(filterByCountMinimum([], 3));

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
function getMostCommonAnimal(animals) {
  // 1. Default Value and Output
  if (animals.length === 0) {
    return null
  }
  let maxAnimal = animals[0] 
  // 2. Define the loop 
  for (let i = 0; i < animals.length; i++) {
    // 3. Accumulate 
    const animal = animals[i]
    if (animal.count > maxAnimal.count) {
      maxAnimal = animal
    }
  }
  return maxAnimal
}

// console.log(getMostCommonAnimal(animals));
// console.log(getMostCommonAnimal([]))


// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
