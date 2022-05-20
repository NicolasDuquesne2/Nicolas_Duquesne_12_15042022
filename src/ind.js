//@ts-check


/**
 * string
 * @type {string} 
 * 
 */
 const string = "LUL"


 /**
  * number
  * @type {number}
  */

const number = 100


/**
 * array : arrays with différents elements types
 * @type {Array}
 */
const arr = [1, 10, 15, 0, "LOL", true]


/**
 * arrayOfOneType : arrays with only one elements type
 * @type {Array<number>}
 */
 const arrOfOneType = [1, 10, 15, 0]

/**
 * Object : we can set boject's parameters type. isObject can be a bool or a string
 * @type {{id: number, name: string, isObject: boolean|string}}
 */
const obj = {
    id: 1,
    name: "lol",
    isObject: true
}


/**
 * Calculate age 
 * @param {number} current current year
 * @param {number} yearOfBirth year of birth
 * @returns {string} age
 */
const calculateAge = (current, yearOfBirth) => {
    return `${current - yearOfBirth}`
}

console.log(calculateAge(2022, 2020))

/**
 * Custom Type
 * @typedef {Object} lol
 * @property {number} id
 * @property {string} name
 * @property {string} [describ] description is optionnal
 */

/**
 * 
 * @type {lol}
 */
const lol = {
    id: 1,
    name: "LUL"
}

/**
 * 
 * Lol class
 */
class Lol {
    /**
     * 
     * @param {Object} LolDetails 
     */
    constructor(LolDetails) {
        /**
         * 
         * @property {string} name
         * @property {number} age
         */
        this.name = LolDetails.name
        this.age = LolDetails.age
    }

    /**
     * 
     * @property {function} printLol prints lol's infos
     * @returns {void}
     */
    printLol() {
        console.log(`Lol's name is ${this.name} and is age is ${this.age}`)
    }
}

/**
 * Link to owner class
 * See {@link Lol}
 * 
 */
const lol1 = new Lol ({
    name: 'LUL',
    age: 10
})

lol1.printLol()