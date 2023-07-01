import AddTodo from '@/Components/AddTodo'
import Navbar from '@/Components/Navbar'
import Todos from '@/Components/Todos'
import React from 'react'
import "./globals.css"
import {RiTodoLine} from "react-icons/ri"
const page = () => {
  return (
    <main>
       <h2> <RiTodoLine className='icons' /> Todo next + Typescript <RiTodoLine className='icons' /> </h2>
       <Navbar />
       <AddTodo />
       <Todos />
    </main>
  )
}

export default page
