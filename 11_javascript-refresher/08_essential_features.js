let hobbies = ["Dancing", "Reading", "Sleeping"]
hobbies.map(hobby => console.log(hobby))

const student = { name: "Lor", age: 20 }
const { name, age } = student
console.log(name, age)

let arr = [1, 2, 3]
let newArr = [...arr, 4, 5]
console.log(newArr)