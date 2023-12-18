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
      <i class="fa-regular fa-clone duplicate" onClick = 'duplicateTask(${index})'></i>
      </li>  
      `
        todoList.appendChild(taskElement)
    })
}

const addTask = () => {
    const inputText = document.querySelector('.text');
    const newTask = inputText.value;

    if (newTask == '') {
        alert('Please Enter some task')
    }
    else {
        tasks.push(newTask);
        inputText.value = '';
        renderTask();
    }
}

const deleteTask = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to remove this task?')

    if (confirmDelete) {
        tasks.pop(tasks[index]);
        renderTask();
    }

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

const duplicateTask = (index) => {
    const duplicatedTask = tasks[index]
    tasks.push(duplicatedTask)
    renderTask()

}

const searchTask = () => {

    const search = document.querySelector('.search').value.toLowerCase();

    for (let i = 0; i < tasks.length; i++) {

        const taskElement = document.querySelector(`.list_${i}`);

        if (tasks[i].toLowerCase().includes(search)) {
            taskElement.style.display = 'block'
        }
        else {
            taskElement.style.display = 'none'
        }

    }
}




