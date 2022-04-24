// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.


describe("replace", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    it("Create a function that takes in a string and returns a coded message", () => {
      expect(replace(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(replace(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(replace(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

//   ● replace › Create a function that takes in a string and returns a coded message

//     ReferenceError: replace is not defined


// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"


// b) Create the function that makes the test pass.
// create a function called replace
// convert a string to an array
// use .map to convert the specified value to the specified numbers
// use .join to convert the array back to a string

const replace = (string) => {
    newArray = string.split('')
    let newString = newArray.map(value =>{
      console.log(value)
        if (value === 'a' || value === 'A'){
            return value = '4'
        } else if (value === 'e' || value === 'E'){
           return value = '3'
        } else if (value === 'i' || value === 'I'){
           return value = '1'
        }else if (value === 'o' || value === 'O'){
           return value = '0'
        } else 
          return value
    })
  return newString.join('')
}

// PASS  ./code-challenges.test.js
// replace
//   ✓ Create a function that takes in a string and returns a coded message (20 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.16 s, estimated 1 s

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("picker", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    it("Create a function that takes in a string and returns a coded message", () => {
      expect(picker(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(picker(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

//   ● picker › Create a function that takes in a string and returns a coded message

//     ReferenceError: picker is not defined

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]


// b) Create the function that makes the test pass.
// create a function called picker
// use .filter to filter out the values that has the specified letter
// use .toUpperCase to and || to also include capital letters
// use .includes to look for the letter in the value 

const picker = (array, letter) => {
   return array.filter(value => {
        if (value.includes(letter) || value.includes(letter.toUpperCase())){
            return value
        } 
    })
}

// PASS  ./code-challenges.test.js
// replace
//   ✓ Create a function that takes in a string and returns a coded message (20 ms)
// picker
//   ✓ Create a function that takes in a string and returns a coded message

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.163 s, estimated 1 s

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.



// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    it("Create a function that takes in a string and returns a coded message", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
    })
  })

//   ● fullHouse › Create a function that takes in a string and returns a coded message

//   ReferenceError: fullHouse is not defined


// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false


// b) Create the function that makes the test pass.

// create a function called fullHouse
// count how many times a number occurs
// look for pairs
// look for toak (THREE OF A KIND)
// if pair == 2 && toak == 3 output true
// else output false
// count how many times a number occurs using .filter
// corrections use .sort to sort the array
// there can only be 2 kinds of numbers anything else = false
// use index 0 to count the lower number
// use .length-1 to count the upper number
// use if else statements to cover if the lower number has 2 0r 3 and vice versa for the upper number



const fullHouse = (array) => {
    let sortArray = array.sort()
    let firstC = sortArray.filter(value => value === sortArray[0]).length
    let secondC = sortArray.filter(value => value === sortArray[sortArray.length-1]).length
    if (firstC == 2 && secondC == 3){
      return true
    } else if (firstC == 3 && secondC == 2){
      return true
    } else 
      return false
  }

//   fullHouse
//     ✓ Create a function that takes in a string and returns a coded message

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.165 s, estimated 1 s



