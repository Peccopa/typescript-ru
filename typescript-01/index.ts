const url = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

import axios from 'axios';
// import faker from 'faker';
// console.log(faker);

// axios.get(url).then((response) => {
//   console.log(response.data);
// });

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const { id, title, completed } = response.data as Todo;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`ID is "${id}", ${title}, ${completed}`);
};
