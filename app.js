//Selectors
const toDoForm = document.querySelector('.input-form');
const toDoButton = document.querySelector('button');
const toDoList = document.querySelector('.toDo-list');
//Event Listeners
toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteCheck);

//Functions 
function addToDo(event){
    event.preventDefault();
    
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('toDo');
    
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoForm.value;
    newToDo.classList.add('to-do-item');
    toDoDiv.appendChild(newToDo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn')
    toDoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn')
    toDoDiv.appendChild(trashButton);

    toDoList.appendChild(toDoDiv);
    toDoForm.value = '';
}

function deleteCheck(event){
    const item = event.target;
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    if (item.classList[0] === "completed-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}