const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");

let todos = [];

// Add todo function
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length === 0) {
    alert("Please enter a todo");
    return;
  }
  const todo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    text: todoText
  };
  todos.push(todo);
  todoInput.value = "";
  renderTodos();
}

// Remove todo function
function removeTodoById(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

// Edit todo function
function editTodoById(id, newText) {
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    return;
  }
  todos[todoIndex].text = newText.trim();
  renderTodos();
}

// Render todos function
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach(todo => {
    const todoElem = document.createElement("li");
    todoElem.innerHTML = `
      <span>${todo.text}</span>
      <button onclick="editTodoById(${todo.id}, prompt('Edit todo', '${todo.text}'))">Edit</button>
      <button onclick="removeTodoById(${todo.id})">Delete</button>
    `;
    todoList.appendChild(todoElem);
  });
}

// Event listeners
addTodoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

// Initial render
renderTodos();
