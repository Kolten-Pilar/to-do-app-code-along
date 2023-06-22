// bring in elements from todo list
const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUL = document.getElementById('todos');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  addToDo();
})

function addToDo(todo) {
  let todoText = input.value;

  if(todo) {
    todoText = todo.text;
  }
  

  if(todoText) {
    const todoEL = document.createElement('li');

    if(todo && todo.completed) {
      todo.classList.add('completed');
    }
    // make the text of li same as input value
    todoEL.innerText = todoText
    // append the todo list items to the todo unordered list
    todoUL.appendChild(todoEL);
  }
}