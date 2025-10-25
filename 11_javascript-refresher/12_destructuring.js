const person = {
    name: "Lor",
    age: 20
}

const hobbies = ["dancing", "reading"]

const { name, age } = person
const [hobby1, hobby2] = hobbies

console.log(name, age)
console.log(hobby1, hobby2)

function printName({ name }) {
    console.log(name)
}
printName(person)