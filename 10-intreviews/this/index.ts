console.log(this); // this is the global object

function showThis() {
  console.log(this); // this is the global object
}
showThis();
const showThis2 = "a";


const obj = {
  name: "John",
  showThis: function () {
    console.log(this); // this is the object itself
  },
};
obj.showThis();

class Person {
  constructor(name) {
    this.name = name;
  }
  showThis() {
    console.log(this); // this is the object itself
  }
  showThisArrow = () => {
    console.log(this); // this is the object itself
  };
}

const person = new Person("John");
console.log("function");
person.showThis();
console.log("arrow");
person.showThisArrow();

