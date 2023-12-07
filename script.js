let tasks = [];

const todoList = document.querySelector('.lower');

if (tasks.length == 0) {
    todoList.innerHTML = `<h3 class='no_items'>No task added</h3>`
}

const renderTask = () => {
    todoList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div')
        taskElement.className = 'todo_list'
        taskElement.innerHTML = `
      <li class = 'list_${index}'>${task}
      <i class="fa-solid fa-xmark cross" onClick = 'deleteTask(${index})'></i>
      <i class="fa-regular fa-pen-to-square edit" onClick = 'editTask(${index})'></i> 
      </li>  
      `
        todoList.appendChild(taskElement)
    })
}

const addTask = () => {
    const inputText = document.querySelector('.text');
    const newTask = inputText.value;

    if (newTask !== '') {
        tasks.push(newTask);
        inputText.value = '';
        renderTask();
    }
}

const deleteTask = (index) => {

    tasks.splice(index, 1);
    renderTask();

    if (tasks.length == 0) {
        todoList.innerHTML = `<h3 class='no_items'>No task added</h3>`
    }
}

const editTask = (index) => {
    const newTask = document.querySelector(`.list_${index}`).innerText;
    const updatedTask = prompt('Edit task', newTask);

    if (updatedTask !== null) {
        tasks[index] = updatedTask;
        renderTask();
    }

}


