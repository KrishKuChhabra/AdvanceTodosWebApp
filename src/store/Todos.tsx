"use client"

import { ReactNode, createContext, useContext, useState } from "react";


export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handelAddTodo: (task: string) => void;
  toggleTodosAsCompleted:(id:string)=>void;
  handelTodoDelete:(id:string)=>void;
};

export const todosContext = createContext<TodosContext | null >(null);

export const TodosProvider = ({children}: { children: ReactNode }) => {

  const [todos, setTodos] = useState<Todo[]>(()=>{
    const newTodos= localStorage.getItem("todos") || "[]";
    return JSON.parse(newTodos) as Todo[]
  });

  const handelAddTodo = (task: string) => {

    setTodos((prev) => {

      const newTodos: Todo[] = [

        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        
        ...prev,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos))
      return newTodos;
    });
  };
    //if the task is completed
    const toggleTodosAsCompleted=(id:string)=>{
        setTodos((prev)=>{
           const newTodos=prev.map((task)=>{
             if(task.id===id){
              return{...task, completed:!task.completed}
             }
             return task
           })
           localStorage.setItem("todos", JSON.stringify(newTodos))
           return newTodos;
        })
    }

    //if the task is deleted
    const handelTodoDelete=(id:string)=>{
        setTodos((prev)=>{
          const newTodos= prev.filter((task)=>task.id !==id)
          localStorage.setItem("todos", JSON.stringify(newTodos))
          return newTodos
        })
    }
  return (
    <todosContext.Provider value={{ todos, handelAddTodo,toggleTodosAsCompleted,handelTodoDelete }}>
      {children}
    </todosContext.Provider>
  );
};

//context api
export function useTodos(){
    const todosContextValue=useContext(todosContext)
    if(!todosContextValue){
        throw new Error("useTodos used Outside of Provider")
    }
    return todosContextValue;
}
