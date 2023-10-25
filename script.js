var todos = [];

function addTodo() {
  var todoInput = document.getElementById('todo-input');
  var todoList = document.getElementById('todo-list');
  
  var todoText = todoInput.value;
  if (todoText) {
    todos.push(todoText);
    todoInput.value = '';
    displayTodos();
  }
}

function displayTodos() {
  var todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  todos.forEach(function (todo, index) {
    var li = document.createElement('li');
    li.textContent = todo;
    todoList.appendChild(li);
  });
}

function calculateSum(a, b) {
    return a + b;
  }

  function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }