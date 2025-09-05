let foods = ["Pizza", "Fries", "Sinigang"]
foods.push("Matcha Frappe") 
foods.shift() 

for (let food of foods) {
  console.log(food)
}

let likedFoods = foods.map(food => "I like " + food)
console.log(likedFoods)
