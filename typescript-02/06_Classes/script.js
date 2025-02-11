"use strict";
class Person {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0 && value < 100) {
            this._age = value;
        }
        else {
            throw new Error('Wrong age!');
        }
    }
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    sayHello() {
        return `Hello, my name is ${this._name} and i'm ${this._age} years old.`;
    }
    static description() {
        return `Description: `;
    }
}
Person.isAdmin = false;
const john = new Person('John', 44);
const bill = new Person('Bill', 33);
console.log(john.sayHello());
console.log(bill.sayHello());
console.log(Person.description());
// console.log(john.age = 1);
if (john instanceof Person) {
    console.log(john);
}
//
//# sourceMappingURL=script.js.map