function greet(name) {
  return "Hello, " + name
}
console.log(greet("Lor"))

const square = (num) => num * num
console.log(square(5))

function calculator(a, b) {
  return { sum: a + b, product: a * b }
}
console.log(calculator(3, 4))
