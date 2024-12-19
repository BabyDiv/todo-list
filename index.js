let input = document.querySelector('.input');
let buttonSubmit = document.querySelector('.button--submit');
let todoList = document.querySelector('.todo-list');

buttonSubmit.addEventListener('click', () => {
  const inputValue = input.value.trim();

  if (inputValue === '') {
    alert('Please enter a valid comment!');
    return;
  }

  const newComment = document.createElement('li');
  newComment.textContent = inputValue;
  newComment.classList.add('list-item');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('button--delete');

  newComment.appendChild(deleteButton);

  todoList.appendChild(newComment);

  input.value = '';
});

todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('button--delete')) {
    event.target.parentElement.remove();
  }
});
