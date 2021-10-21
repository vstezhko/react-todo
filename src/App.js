import './App.css';
import TodoList from "./Todo/TodoList";
import AddTodo from "./Todo/AddTodo"
import {useState, useEffect} from "react";
import Context from "./context";
import Loader from "./Loader.js";


function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
            .then(response => response.json())
            .then(todos => (
                setTodos(todos),
        setLoading(false)
    ))}, [])

    function onCreate(title) {
        setTodos(todos.concat([{
            id: Date.now(),
            completed: false,
            title: title
        }]))
    }

    function handleDoneChange(id) {
        setTodos(todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function handleDeleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <Context.Provider value={{handleDoneChange, handleDeleteTodo, onCreate}}>

            <div className="App">
                Hello
                <AddTodo/>
                {loading ? <Loader/> : undefined}
                {todos.length > 0 ? <TodoList todos={todos}/> : (loading ? null : <span>No todos</span>)}

            </div>
        </Context.Provider>

    );
}


export default App;
