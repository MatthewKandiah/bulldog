// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);

// Event Handlers
function handleSubmitForm(e) {
	e.preventDefault();
	let input = document.querySelector('input');
	if (input.value != '') {
		addTodo(input.value);
	}
	input.value = '';
}

// Helpers
function addTodo(todo) {
	let ul = document.querySelector('ul');
	let li = document.createElement('li');

	li.innerHTML = `
		<span class="todo-item">${todo}</span>
		<button name="checkButton"><i class="fas fa-check-square"></i></button>
		<button name="deleteButton"><i class="fas fa-trash"></i></button>
	`;
	li.classList.add('todo-list-item');
	ul.appendChild(li);
}


// TODO - completing todos and clear all button, let's try this without the video first
// video to see how he did it after we have a go - https://www.youtube.com/watch?v=o_zFRRepsmE

