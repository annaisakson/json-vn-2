const todoButton = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

//kolla om vi har kontakt ********
// const checkConnection = [];
// checkConnection.push(todoButton);
// checkConnection.push(todoInput);
// checkConnection.push(todoList);
// checkConnection.forEach(function(check){
//     console.log(check)
// })

// array som listar grejerna
const todos = [];

todoButton.addEventListener("click", addTodo);
document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        addTodo();
    }
});

function addTodo(){
    const todoText = todoInput.value;
// om inget skrivs i fältet
    if (todoText !== ""){
    todos.push(todoText);
    }
    console.log(todos);
    todoInput.value = "";
    todoInput.focus();
    showTodo();
}

function showTodo(){

    const todoListItem = document.createElement("li");

    todos.forEach(function(todo){
        todoListItem.textContent = todo;
        todoList.appendChild(todoListItem);
    });

    const completeButton = document.createElement("button");
    completeButton.textContent = "Klar";
    todoListItem.appendChild(completeButton);
}
