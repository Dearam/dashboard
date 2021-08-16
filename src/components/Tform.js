import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import './todo.css'

const Tform=(props)=>{
    const [input,setInput]=useState('')

    const onformChange=e=>{
        setInput(e.target.value)
    }

    const onformSubmit= e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        })
        setInput('')
    }

    return (
            <form onSubmit={onformSubmit}>
                <div className="wrapper">
                    <div className="title">Todo</div>
                        <input 
                            type="text" 
                            placeholder="enter a todo..." 
                            className="task"
                            value={input}
                            required
                            onChange={onformChange}/>
                        <button className="bx bx-plus-circle">add
                        </button>
                        <br/><br/>
                        <hr/>
                        <h4>Five Were allowed</h4>
                </div>
            </form>
    )
}
export default Tform
