import React,{useState} from 'react'
import Tform from './Tform'
import Todo from './Todo'
import ViewTodo from './ViewTodo'
import './todo.css'

function Todolist() {
    const [todos,setTodos]=useState([])


    const addTodo = todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos= [todo,...todos]
        setTodos(newTodos)
        // console.log(todo, ...todos)
    }

    const removeTodo = id=>{
        const removeArr = [...todos].filter(todo => todo.id !==id)
        setTodos(removeArr)
    }


    const editTodo =(todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo=id=>{
        let updatedTodos = todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <div>
            <br/><br/>
            <Tform onSubmit={addTodo}/>
            <ViewTodo
                removeTodo={removeTodo}
                editTodo={editTodo}
                todos={todos}
                completeTodo={completeTodo}/>
        </div>
    )
}

export default Todolist

