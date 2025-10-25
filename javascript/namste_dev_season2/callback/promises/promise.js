
const API_URL = "https://jsonplaceholder.typicode.com/todos/1";

const todo = fetch(API_URL);

console.log(todo);

todo.then(function(data){
    console.log(data);
});