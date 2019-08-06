
import React from 'react';

const TodoForm = props => (
    <form className="App" onSubmit={props.onSubmit}>
        <input value={props.value} onChange={props.onChange} />
        <button>Submit</button>
    </form>
)

export default TodoForm;