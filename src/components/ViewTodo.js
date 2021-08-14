import React,{useState} from 'react'
import Todolist from './Todolist'
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import Tform from './Tform';
import './todo.css'


const ViewTodo=({todos,completeTodo,removeTodo,editTodo}) => {
    const [edit,setEdit]=useState({
        id:null,
        value:''
    })

    const submitEdit = value =>{
        editTodo(edit.id,value)
        setEdit({
            id:null,
            value:''
        })
    }

    if(edit.id){
        return <Tform edit={edit} onSubmit={submitEdit}/>
    }

    return todos.map((todo,index)=>(
        <div 
            className={todo.isComplete ? 'todo-row complete' :'todo-row'}
            key={index}
            >
                 <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
                     {todo.text}
                 </div>
                 <div 
                 //className='icons'
                 >
                     <i
                        onClick={()=>removeTodo(todo.id)}
                        className='bx bx-no-entry'
                        />
                     <i
                        onClick={()=>setEdit({id:todo.id,value:todo.text})}
                        className='bx bx-edit'
                        />
                 </div>
        </div>
        
    ))
}

export default ViewTodo
