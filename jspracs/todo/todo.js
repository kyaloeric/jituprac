      // Load todos from local storage on page load
      let todos = JSON.parse(localStorage.getItem('todos')) || [];

      function saveTodos() {
          localStorage.setItem('todos', JSON.stringify(todos));
      }

      function addTodo() {
        const todoInput = document.getElementById('todoInput');
        const todoText = todoInput.value.trim();

        if (todoText === '') {
            alert('Please enter a todo before adding.');
        } else {
            todos.push({ text: todoText, completed: false });
            saveTodos();
            updateTodoList();
            todoInput.value = '';
        }
    }

      function deleteTodo(index) {
          todos.splice(index, 1);
          saveTodos();
          updateTodoList();
      }

      function toggleComplete(index) {
          todos[index].completed = !todos[index].completed;
          saveTodos();
          updateTodoList();
      }

      function updateTitle(index) {
          const newTitle = prompt('Enter a new title:', todos[index].text);
          if (newTitle !== null) {
              todos[index].text = newTitle;
              saveTodos();
              updateTodoList();
          }
      }

      function updateTodoList() {
          const todoList = document.getElementById('todoList');
          const completedTasks = document.getElementById('completedTasks');
          todoList.innerHTML = '';
          completedTasks.innerHTML = '';

          todos.forEach((todo, index) => {
              const listItem = document.createElement('li');
              listItem.innerHTML = `
                  <div class="words">
                        <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
                  </div>

                  <div class="action-buttons">
                        <button class="delete" onclick="deleteTodo(${index})">Delete</button>
                        <button class="edit" onclick="updateTitle(${index})">Edit</button>
                        <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleComplete(${index})">
                  </div>
              `;
              if (todo.completed) {
                  completedTasks.appendChild(listItem);
              } else {
                  todoList.appendChild(listItem);
              }
          });
      }

      // Initial rendering
      updateTodoList();