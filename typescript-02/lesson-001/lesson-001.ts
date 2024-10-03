import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

axios.get(url).then((response) => {
  console.log(response.data);
});
