function addTodo() {
  const todoElement = document.getElementById("new-todo");
  const todo = todoElement.value;
  todoElement.value = "";
  if (todo.length < 3) {
    return alert(
      "You must enter at least 3 characters before submitting a task!"
    );
  }
  const list = document.getElementById("list");
  const todoList = document.createElement("li");
  const text = document.createTextNode(todo);

  todoList.appendChild(text);
  list.appendChild(todoList);

  todoList.setAttribute("onclick", "this.remove()");
}
