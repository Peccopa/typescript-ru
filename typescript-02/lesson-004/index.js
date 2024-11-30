"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));
axios_1.default.get(url).then(function (response) {
    console.log(response.data);
});
