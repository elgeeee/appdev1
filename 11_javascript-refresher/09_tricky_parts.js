console.log("63" == 63)  
console.log("63" === 63) 

let x  
let y = null

console.log("Undefined:", x)
console.log("Null:", y)

let obj = {
  name: "Lor",
  regularFunc: function() {
    console.log("Regular:", this.name)
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name) 
  }
}

obj.regularFunc()
obj.arrowFunc()

let arr1 = [1, 2, 3]
let arr2 = arr1
arr2.push(4)
console.log(arr1, arr2) 

let arr3 = [1, 2, 3]
let arr4 = [...arr3]
arr4.push(4)
console.log(arr3, arr4)
