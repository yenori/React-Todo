import React from 'react';
import PropTypes from 'prop-types';

todoList.propTypes = {
    todoList:PropTypes.array,
};
todoList.defaultProps = {
    todoList:[],
};


function todoList({todoList}) {
    return (
        <ul>
            {todoList.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ) )}
        </ul>
    );
}

export default todoList;