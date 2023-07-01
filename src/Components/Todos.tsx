"use client"
import { useTodos } from '@/store/Todos'
import { filter } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'
const Todos = () => {
    const {todos,toggleTodosAsCompleted,handelTodoDelete}=useTodos();
    const searchParams=useSearchParams()
    const todosFilter= searchParams.get('todos')
    console.log(todos);

    let filterTodos=todos;

    if(todosFilter==="active"){
        filterTodos=filterTodos.filter((todo)=>!todo.completed)
    }else if(todosFilter==="completed"){
        filterTodos=filterTodos.filter((todo)=>todo.completed)
    }
  return (
    <ul>
        {
            filterTodos.map((todo)=>{
                return <li key={todo.id}>
                   
                    <input type="checkbox" name="" id={`todo-${todo.id} `} checked={todo.completed} onChange={()=>toggleTodosAsCompleted(todo.id)}  />
                   
                   <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

                   {
                    todo.completed && (
                        <button type="button" onClick={()=>handelTodoDelete(todo.id)}>Delete</button>
                    )
                   }
                </li>
            })
        }
    </ul>
  )
}

export default Todos
