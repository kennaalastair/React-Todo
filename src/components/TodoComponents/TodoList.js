
import React from 'react';

const TodoList = props => (
    <ul>
        {
            props.items.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
);

export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
