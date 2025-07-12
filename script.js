document.getElementById('add-button').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  if (taskInput.value.trim() === '') return;

  const li = document.createElement('li');

  const radioButton = document.createElement('input');
  radioButton.type = 'radio';
  radioButton.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const taskText = document.createElement('span');
  taskText.textContent = taskInput.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '×';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.appendChild(radioButton);
  li.appendChild(taskText);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = '';
}
