"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));
const axios_1 = __importDefault(require("axios"));
axios_1.default.get(url).then((response) => {
    const { id, title, completed } = response.data;
    logTodo(id, title, completed);
});
const logTodo = (id, title, completed) => {
    console.log(`ID is "${id}", ${title}, ${completed}`);
};
//# sourceMappingURL=index.js.map