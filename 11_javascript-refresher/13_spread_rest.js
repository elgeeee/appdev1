const numbers = [1, 2, 3]
const moreNumbers = [...numbers, 4, 5, 6]
console.log(moreNumbers)

const user = { name: "Lor", age: 20 }
const updatedUser = { ...user, color: "Lilac" }
console.log(updatedUser)

function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0)
}
console.log(sum(1, 2, 3, 4, 5, 6, 7))
console.log(sum(...numbers))

