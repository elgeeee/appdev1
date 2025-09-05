let aboutMe = {
    name: "Lor",
    age: 20,
    course: "App Dev 1",
    introduce: function() {
        console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old.")
  }
}

aboutMe.hobby = "Dancing"
aboutMe.introduce()