function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.Value.trim();

    if(taskText === ''){
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.textContent = taskText

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () =>
    {
        if(checkbox.checked){
            listItem.classList.add('completed');
        }else{
            listItem.classList.remove('completed');
        }
    });

    listItem.prepend(checkbox);
    taskList.appendChild(listItem);

    taskInput.value = '';
}