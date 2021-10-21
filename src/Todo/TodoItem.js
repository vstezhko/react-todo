import React, {useContext} from "react";
import PropTypes from 'prop-types';
import Context from "../context";

function TodoItem ({todo, index}) {
    const {handleDeleteTodo, handleDoneChange} = useContext(Context)
    return (
        <li className={todo.completed ? 'done' : undefined}>
            <span>
                <input type="checkbox" checked={todo.completed} onChange={handleDoneChange.bind(null, todo.id)}/>
                <strong>{index+1}. </strong>{todo.title}
            </span>
            <button onClick={handleDeleteTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,

}


export default TodoItem