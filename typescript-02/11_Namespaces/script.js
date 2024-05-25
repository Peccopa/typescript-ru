"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var Utils;
(function (Utils) {
    function log(text, color, fontSize) {
        if (fontSize) {
            console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}px`);
        }
        else {
            console.log(`%c${text}`, `color: ${color};`);
        }
    }
    Utils.log = log;
    log('Text', '#fff', 30);
})(Utils || (Utils = {}));
Utils.log('Text', '#ccc', 30);
var Animals;
(function (Animals) {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    Animals.Animal = Animal;
    let Pets;
    (function (Pets) {
        class Cat extends Animal {
            say() {
                Utils.log(`${this.name}: mrrr... `, 'green', 30);
            }
        }
        Pets.Cat = Cat;
        class Dog extends Animal {
            say() {
                Utils.log(`${this.name}: Awwww... `, 'green', 30);
            }
        }
        Pets.Dog = Dog;
    })(Pets = Animals.Pets || (Animals.Pets = {}));
})(Animals || (Animals = {}));
(function (Animals) {
    var _Tiger_text;
    class Tiger extends Animals.Animal {
        constructor(name, text) {
            super(name);
            _Tiger_text.set(this, void 0);
            this.text = text;
            __classPrivateFieldSet(this, _Tiger_text, text, "f");
        }
        say() {
            Utils.log(`${this.name}: ${this.text} ${__classPrivateFieldGet(this, _Tiger_text, "f")}`, '#444', 11);
        }
    }
    _Tiger_text = new WeakMap();
    Animals.Tiger = Tiger;
})(Animals || (Animals = {}));
const tiger = new Animals.Tiger('Tiger', 'Arrr!');
tiger.say();
const cat = new Animals.Pets.Cat('Box');
cat.say();
const dog = new Animals.Pets.Dog('Crack');
dog.say();
//
//# sourceMappingURL=script.js.map