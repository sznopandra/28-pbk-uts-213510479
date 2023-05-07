<template>
    <div class="todo-app">
      <h1 class="title">My To-Do List</h1>
      <form @submit.prevent="addTodo">
        <input v-model="newTodo" class="new-todo-input" placeholder="Add a new to-do item">
        <button class="add-button">Add</button>
      </form>
      <ul class="todo-list">
        <li v-for="(todo, index) in filteredTodos" :key="index" :class="{ 'completed': todo.completed }">
          <input type="checkbox" :checked="todo.completed" :value="todo.completed" @change="toggleCompletion(index)" class="todo-checkbox">
          <span class="todo-text">{{ todo.text }}</span>
          <button @click="remove(index)" class="remove-button">X</button>
        </li>
      </ul>
      <div class="filter-container">
        <label class="filter-label">Filter:</label>
        <select v-model="filter" class="filter-select">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        todos: [
          { text: 'Mencintai yang salah', completed: false },
          { text: 'Menjadi Abdi Negara', completed: false },
          { text: 'Turu', completed: true }
        ],
        newTodo: '',
        filter: 'all'
      }
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() !== '') {
          this.todos.push({ text: this.newTodo.trim(), completed: false })
          this.newTodo = ''
        }
      },
      remove(index) {
        this.todos.splice(index, 1)
      },
      toggleCompletion(index) {
        this.todos[index].completed = !this.todos[index].completed
      }
    },
    computed: {
      filteredTodos() {
        if (this.filter === 'all') {
          return this.todos
        } else if (this.filter === 'active') {
          return this.todos.filter(todo => !todo.completed)
        } else if (this.filter === 'completed') {
          return this.todos.filter(todo => todo.completed)
        }
        // return empty array as default
        return []
      }
    }
  }
  </script>
  
  <style>
  /* Styling for the todo app container */
  .todo-app {
    font-family: Arial, sans-serif;
    width: 50%;
    margin: auto;
  }
  
  /* Styling for the title */
  .title {
    text-align: center;
    font-size: 32px;
    color: #444;
    margin-bottom: 1rem;
  }
  
  /* Styling for the form */
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  /* Styling for the input field */
  .new-todo-input {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 0.5rem;
    width: 60%;
    font-size: 16px;
    margin-right: 1rem;
  }
  
  /* Styling for the add button */
  .add-button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    background-color: #00bfff;
    border: none;
    color: white;
    cursor: pointer;
  }
  
  /* Styling for the list container */
  .todo-list {
    list-style-type: none;
    padding: 0;
    margin-bottom: 1rem;
  }
  
  /* Styling for each list item */
  .todo-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-radius: 0.25rem;
    background-color: #f5f5f5;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }
  
  /* Styling for the completed list item */
  .completed {
    text-decoration: line-through;
    color: #ccc;
  }
  
  /* Styling for the checkbox */
  .todo-checkbox {
    margin-right: 0.5rem;
  }
  
  /* Styling for the delete button */
  .remove-button {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    border-radius: 0.25rem;
    background-color: #ff6961;
    border: none;
    color: white;
    cursor: pointer;
  }
  
  /* Styling for the filter dropdown container */
  .filter-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  /* Styling for the filter label */
  .filter-label {
    font-size: 1rem;
    color: #444;
    margin-right: 0.5rem;
  }
  
  /* Styling for the filter dropdown */
  .filter-select {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    border: 2px solid #ccc;
    cursor: pointer;
    color: #444;
  }
  
  /* Styling for the filter dropdown options */
  .filter-select option {
    background-color: #fff;
    color: #444;
  }
  
  /* Styling for the filter dropdown arrow */
  .filter-select::after {
    content: '\25BC';
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    font-size: 1rem;
    color: #444;
  }
  </style>
  