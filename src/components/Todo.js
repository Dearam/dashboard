import React,{useState}from 'react'
import './todo.css'
import Tform from './Tform';
import Todolist from './Todolist'

const Todo=()=>{

    const [input,setInput]=useState('')
    const [todos,setTodos]=useState([]);
    return (

        <div>
            <Todolist/>
        </div>

        // <div>
        // <form>
        //    <div className="wrapper">
        //        <div className="title">Todo</div>
        //        <div className="box">
        //             <Tform 
        //                 input={input}
        //                 setInput={setInput}
        //                 todos={todos}
        //                 setTodos={setTodos}/>
        //        </div>
        //        <div>
        //            <Todolist
        //                 todos={todos}
        //                 setTodos={setTodos}/>
        //        </div>
        //    </div>
        // </form>
        // </div>
    )
}

export default Todo
