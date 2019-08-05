
import React from 'react';

import Todo from './Todo';

const TodoList = props => (
    <>
        {/* <ul>
            {
                props.items.map((item) => <li key={item.id} item={item} toggleItem={props.toggleItem}>{item}</li>)
            }
        </ul> */}
        {
            props.items.map(item => (<Todo key={item.id} item={item} />))
        }
        <button className="clear-btn" onClick=                 {props.clearFinished}>
            Clear Finished Tasks
        </button>
    </>
);

export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
