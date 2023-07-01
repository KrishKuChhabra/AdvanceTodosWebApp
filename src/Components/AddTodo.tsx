"use client"

import { useTodos } from '@/store/Todos'
import React, { FormEvent, useState } from 'react'


const AddTodo = () => {
    const[todo, setTodo]=useState("")

    const {handelAddTodo}=useTodos()

    const handelFormSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handelAddTodo(todo);
        setTodo("")
    }

  return (
    <div>
      <form onSubmit={handelFormSubmit}>
         <input type="text" placeholder='write your todo' value={todo} onChange={(event)=>setTodo(event.target.value)} />
         <button type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default AddTodo
