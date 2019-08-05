import React from 'react';

const Todo = props => {
    console.log(props.item.finished);
    return (
        <div
            className={`item${props.item.finished ? ' purchased' : ''}`}
            onClick={() => props.toggleItem(props.item.id)}
        >
            <p>{props.item.name}</p>
        </div>
    );
};

export default Todo;