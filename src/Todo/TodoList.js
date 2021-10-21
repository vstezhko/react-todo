import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'


function TodoList(props) {
    return (
        <ul>
            {props.todos.map((item, index) => {
                    return <TodoItem todo={item} key = {item.id} index={index}/>
                })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList