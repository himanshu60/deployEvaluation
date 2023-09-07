// class Animal{
//   constructor(name){
//     this.name=name;
//   }
//   sayName(){
//     console.log(`my name is ${this.name}`)
//   }
// }

// class Dog extends Animal{
//   constructor(name,breed){
//     super(name);
//     this.breed=breed;
//   }
//   bark(){
//     console.log(`dog is ${this.breed}`)
//   }
// }
// const ans=new Animal("max","x");
// ans.sayName();
// ans.bark()
class Animal {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`breed is ${this.breed}`);
  }
}




const myDog = new Dog("Max", "Poodle");

myDog.sayName(); // Output: My name is Max
myDog.bark(); // Output: Woof!

// function person(name,age){
// this.name=name
// this.age=age
// }

// const details=new person("himmu",22)
// const details2=new person("pihu",22)
// console.log(details,details2)
