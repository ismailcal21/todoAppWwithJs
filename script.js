const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

var todos = [];

addBtn.addEventListener("click", function () {
  if (todoInput.value === "") {
    alert("Todo text can not be empty");
    return;
  }
  //   const h2 = document.createElement("h2");
  //   h2.style.color = "#fff";
  //   h2.innerText = todoInput.value;
  //   todoList.appendChild(h2);
  const todoContainer = document.createElement("div");
  const todoText = document.createElement("h2");
  const buttonContainer = document.createElement("div");
  const done = document.createElement("button");
  const deleteBtn = document.createElement("button");

  const todoId = new Date().getTime();
  todoText.innerText = todoInput.value;
  done.innerText = "Done";
  deleteBtn.innerText = "Delete";
  buttonContainer.appendChild(done);
  buttonContainer.appendChild(deleteBtn);

  todoContainer.appendChild(todoText);
  todoContainer.appendChild(buttonContainer);
  todoContainer.classList.add("todoContainer");
  todoContainer.id = todoId;
  deleteBtn.addEventListener("click", function () {
    console.log(todos[0].id);
    deleteTodo(todoId);
    //todoText.classList.toggle("done");
  });

  done.addEventListener("click", function () {
    updateTodo(todoId);
    if (todoContainer.classList.contains("done")) {
      done.innerText = "Undone";
    } else {
      done.innerHTML = "done";
    }
  });

  todos.push(todoContainer);
  appendTodos();
  //   todoList.appendChild(todoContainer);
  todoInput.value = "";
});

function appendTodos() {
  todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    todoList.appendChild(todos[i]);
  }
}

function deleteTodo(id) {
  var tempArr = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id != id) {
      tempArr.push(todos[i]);
    }
  }
  console.log("tempArr", tempArr);
  todos = tempArr;
  appendTodos();
}

function updateTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].classList.toggle("done");
    }
  }
}
