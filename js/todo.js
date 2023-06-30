const TODOS_KEY = "toDos";

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const savedToDos = localStorage.getItem(TODOS_KEY);

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));
    saveToDos();
}

function paintToDo(newToDo){
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    newLi.id = newToDo.id;
    newSpan.innerText = newToDo.text;
    newBtn.innerText = "X";
    newBtn.addEventListener("click", deleteToDo);

    newLi.appendChild(newSpan);
    newLi.appendChild(newBtn);
    toDoList.appendChild(newLi);
}

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = {
        text: toDoInput.value,
        id: Date.now(),
    };
    toDoInput.value = "";

    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit);