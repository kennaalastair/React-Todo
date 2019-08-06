import React, { Component } from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      id: '',
      finished: false
    };
  }

  toggleItem = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
          };
        } else {
          return item;
        }
      })
    })
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      id: Date.now(),
      items: [...this.state.items, this.state.term]
    });
  }

  clearFinished = () => {
    this.setState({
      items: this.state.items.filter(item => !item.finished)
    });
  };

  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <TodoForm 
          onSubmit={this.onSubmit}
          value={this.state.term}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
