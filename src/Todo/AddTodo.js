import React, {useContext, useState} from "react";
import Context from "../context";

function useInputValue (defaultValue='') {
    const [value, setValue] = useState('');
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value),
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo() {
    const input = useInputValue('');
    const {onCreate} = useContext(Context);

    function submitHandler (event) {
        event.preventDefault();
        if (input.value().trim()) (
            onCreate(input.value())
        );
        input.clear();
    }

    return (
        <form className='addTodo' onSubmit={submitHandler}>
            <input type="text" {...input.bind}/>
            <button type="submit">Add todo</button>
        </form>
    )
}

export default AddTodo