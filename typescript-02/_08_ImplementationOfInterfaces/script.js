"use strict";
class Person09 {
    constructor(name, age) {
        this.name = '';
        // private name: string = '';
        // protected name: string = '';
        // public age: number = 0;
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    // constructor(public name: string, public age: number) {}
    sayHello() {
        return `Hello, my name is ${this.name}`;
    }
}
class Person08 {
    constructor(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hello, my name is ${this.name}`;
    }
}
class Student08 extends Person08 {
    constructor(name, age, group, course) {
        super(name, age);
        this.group = '';
        this.course = 0;
        this.group = group;
        this.course = course;
    }
    sayHello() {
        // return `I\`m a situdent ${this.name}`
        const text = super.sayHello();
        return `${text}. I\`m from ${this.group} group`;
    }
    description() {
        return `
    Name: ${this.name}
    Age: ${this.age}
    Group: ${this.group}
    Course: ${this.course}
    `;
    }
}
class Teacher08 extends Person08 {
    constructor(name, age, disciplines) {
        super(name, age);
        this.disciplines = [];
        this.disciplines = disciplines;
    }
    description() {
        return `
    Name: ${this.name}
    Age: ${this.age}
    Disc: ${this.disciplines}
    `;
    }
}
// const john08: Person08 = new Person08('John', 44);
const bill08 = new Student08('Bill', 34, 'TS', 3);
// console.log(bill08);
const bill08_2 = bill08;
// console.log(bill08_2);
const bob08 = new Student08('Bob', 11, '34', 32);
const lara08 = new Teacher08('Lara', 45, ['math', 'js', 'ts']);
// console.log(john08.sayHello());
console.log(bill08.sayHello());
console.log(bill08.description());
console.log(lara08.sayHello());
console.log(lara08.description());
//
//# sourceMappingURL=script.js.map