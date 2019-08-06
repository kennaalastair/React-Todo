import React, { Component } from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const TodoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake cookies',
    id: 1528817084358,
    completed: true
  }
]

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData,
    };
  }

  filterCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  }

  toggleCompleted = (id) => {
    console.log('toggleCompleted', id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    });
  }

  addTodo = task => {
    this.setState({
      todos: [...this.state.todos, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    });
  };

  render() {
    return (
      <div>
          Todo List
          <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
          <TodoForm addTodo={this.addTodo} filterTodos={this.filterCompleted} />
      </div>
    );
  }
}
