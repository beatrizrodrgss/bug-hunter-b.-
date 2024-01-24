function addTask() {
    const newTaskText = document.getElementById('newTask').value;
    if (newTaskText.trim() !== '') {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        newTask.className = 'task';
        newTask.innerHTML = `
            <input type="checkbox" onchange="toggleTask(this)">
            <span>${newTaskText}</span>
            <button onclick="deleteTask(this)">Excluir</button>
        `;
        taskList.appendChild(newTask);
        document.getElementById('newTask').value = '';
        updatePendingTasksCount();
    }
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
    updatePendingTasksCount();
}

function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    taskText.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    updatePendingTasksCount();
}

function deleteCompleted() {
    const taskList = document.getElementById('taskList');
    const completedTasks = taskList.querySelectorAll('.task input:checked');
    completedTasks.forEach(task => task.parentElement.remove());
    updatePendingTasksCount();
}

function updatePendingTasksCount() {
    const taskList = document.getElementById('taskList');
    const pendingTasks = taskList.querySelectorAll('.task input:not(:checked)').length;
    document.getElementById('pendingTasksCount').textContent = `${pendingTasks} tarefa${pendingTasks !== 1 ? 's' : ''} pendente${pendingTasks !== 1 ? 's' : ''}`;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}

function handleCheckboxChange() {
    // Lógica adicional
}

function handleRadioChange() {
    // Lógica adicional
}

function handleSelectChange() {
    const selectedValue = document.getElementById('testSelect').value;
    openPopup(`Seleção alterada para: ${selectedValue}`);
}

function handleTextInputChange() {
    const inputValue = document.getElementById('testTextInput').value;
    openPopup(`Entrada de texto alterada para: ${inputValue}`);
}

function openPopup(message) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.innerHTML = message;
    popup.style.display = 'block';
    overlay.style.display = 'block';

    // Fechar o popup automaticamente após 2 segundos (2000 milissegundos)
    setTimeout(closePopup, 2000);
}

function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}
