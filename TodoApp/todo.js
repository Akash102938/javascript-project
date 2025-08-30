const inputbox = document.getElementById('inputbox')
const addbtn = document.getElementById('addbtn')
const todoList = document.getElementById('todoList')

let editTodo = null


const addTodo = () => {
    const inputText = inputbox.value.trim();
    if (inputText.lenght <= 0) {
        alert("you must write something here");
        return false;
    }
    if (addbtn.value === "Edit") {
        // passing the edited value to the previous sibling
        editTodo.target.previousElementSibling.innerHTML = inputText;
        editlocalTodos(inputText.target.previousElementSibling.innerHTML);
        addbtn.value = "Add";
        inputbox.value = ''
    }
    else {
        const li = document.createElement("li");
        const p = document.createElement("p")
        p.innerHTML = inputText;
        li.appendChild(p)
        todoList.appendChild(li)
        inputbox.value = ""

        //creating edit btn
        const editbtn = document.createElement("button");
        editbtn.innerText = "Edit"
        editbtn.classList.add("btn", "edit");
        li.appendChild(editbtn)

        //creating delete button
        const deletebtn = document.createElement("button");
        deletebtn.innerText = "Remove"
        deletebtn.classList.add("btn", "delete")
        li.appendChild(deletebtn)
    }
    savelocalTodos(inputText);
}
//update and delete function 
const updateTodo = (e) => {
    //console.log(e.target.innerHTML);
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement);
        deletelocalTodos(e.target.parentElement);    }
    if (e.target.innerHTML === "Edit") {
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addbtn.value = "Edit"
        editTodo = e;
    }
}
//local storage function
const savelocalTodos = (todo) => {
    let todos = [];
    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

}
//getting local todos
const getlocalTodos = () => {
    let todos = [];
    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach((todo) => {
            const li = document.createElement("li");
            const p = document.createElement("p")
            p.innerHTML = todo;
            li.appendChild(p)
            todoList.appendChild(li);

            //creating edit btn
            const editbtn = document.createElement("button");
            editbtn.innerText = "Edit"
            editbtn.classList.add("btn", "edit");
            li.appendChild(editbtn)

            //creating delete button
            const deletebtn = document.createElement("button");
            deletebtn.innerText = "Remove"
            deletebtn.classList.add("btn", "delete")
            li.appendChild(deletebtn)

            todoList.appendChild(li);
        })
     }
}
//deleting local todos

const deletelocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    let todotext = todo.children[0].innerHTML;
    let todoindex = todos.indexOf(todotext);
    todos.splice(todoindex,1);
    localStorage.setItem("todos", JSON.stringify(todos));

    //console.log(index);
    
}
const editlocalTodos = (todo)=>{
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoindex = todos.indexOf(todo);
    todos[todoindex]=inputbox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}
document.addEventListener("DOMContentLoaded", getlocalTodos)
addbtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo)