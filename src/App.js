import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
  // you will need a place to store your state in this component.
    this.state = {
      task: '',
      id: Date.now(),
      completed: false
    };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  }
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;
