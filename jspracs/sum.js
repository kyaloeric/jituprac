// // cmap is used to extract the price values from each dictionary and create an array of prices.
// // reduce is used to calculate the sum of the prices in the array.
// // The initial value for the sum is set to 0.


// const items = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];

// const sum = items.map(item => item.price).reduce((total, price) => total + price, 0);

// console.log(sum);



let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(text) {
    todos.push({ text, completed: false });
    saveTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
}

function updateTitle(index, newTitle) {
    todos[index].text = newTitle;
    saveTodos();
}

function displayTodos() {
    console.log('Todo List:');
    todos.forEach((todo, index) => {
        const status = todo.completed ? '✓' : ' ';
        console.log(`[${index}] ${status} ${todo.text}`);
    });
}

// Example usage:
addTodo('Buy groceries');
addTodo('Read a book');
toggleComplete(0);
updateTitle(1, 'Read a novel');
displayTodos();
deleteTodo(0);
displayTodos();
