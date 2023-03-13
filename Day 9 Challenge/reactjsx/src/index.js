import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let todoList = [];

const todoForm = document.getElementById('todo-form');
const todoTable = document.getElementById('todo-list').getElementsByTagName('tbody')[0];

function renderTodoList() {
   todoTable.innerHTML = '';
   todoList.forEach(function(todo, index) {
       let row = todoTable.insertRow(index);
       let no = row.insertCell(0);
       let description = row.insertCell(1);
       let status = row.insertCell(2);
       no.innerHTML = index + 1;
       description.innerHTML = todo.description;
       status.innerHTML = todo.status;
   });
}

function addTodoToList(event) {
   event.preventDefault();
   let descriptionInput = document.getElementById('description');
   let statusInput = document.getElementById('stat')
   let newTodo = {
       description: descriptionInput.value,
       status: statusInput.value
   };
   todoList.push(newTodo);
   renderTodoList();
   descriptionInput.value = '';
}

todoForm.addEventListener('submit', addTodoToList);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
