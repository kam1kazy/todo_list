import React, {useState} from "react";

import TodoForm from "@components/Todos/TodoForm";
import TodoItem from "@components/Todos/TodoItem";

import {useDispatch} from "react-redux";
import {addTodoReducer, removeTodoReducer, changePropsTodoInReducer} from '@store/tookitSlice'

function TodoList() {

   const [todos, setTodos] = useState([])
   const dispatch = useDispatch()

   const addTodo = (text) => {
      let id = 1

      if (todos.length > 0) {
         id = todos[0].id + 1
      }

      let todo = {id: id, text: text, completed: false, important: false, folderTodo: 'task'}

      let newTodos = [todo, ...todos]

      dispatch(addTodoReducer(todo))
      setTodos(newTodos)
   }

   const removeTodo = (id) => {
      let updatedTodos = [...todos].filter((todo) => todo.id !== id)

      dispatch(removeTodoReducer(id))
      setTodos(updatedTodos)
   }

   const completeTodo = (id) => {
      let updatedTodos = todos.map((todo) => {
         if (todo.id === id) {
            let changeProps = {...todo}
            changeProps.completed = !changeProps.completed
            todo = changeProps
         }
         return todo
      })

      dispatch(changePropsTodoInReducer(updatedTodos))
      setTodos(updatedTodos)
   }

   const importantTodo = (id) => {
      let updatedTodos = todos.map((todo) => {
         if (todo.id === id) {
            let changeProps = {...todo}
            changeProps.important = !changeProps.important
            todo = changeProps
         }
         return todo
      })

      dispatch(changePropsTodoInReducer(updatedTodos))
      setTodos(updatedTodos)
   }

   const folderTodo = (id) => {
      let updatedTodos = todos.map((todo) => {

         if (todo.id === id) {

            let changeProps = {...todo}
            changeProps.folderTodo = "change"
            todo = changeProps

         }
         return todo
      })

      dispatch(changePropsTodoInReducer(updatedTodos))
      setTodos(updatedTodos)
   }

   let sortTodoImportant = todos.sort((a, b) => b.important - a.important)
   let sortTodo = sortTodoImportant.sort((a, b) => a.completed - b.completed)

   return (
      <div className="todo-app">
         <div className="todo-header">
            <h1>To Do list</h1>
            <TodoForm addTodo={addTodo}/>
         </div>

         <ul className="tod-list">
            {sortTodo.map((todo) => {
               return (
                  <TodoItem
                     removeTodo={removeTodo}
                     completeTodo={completeTodo}
                     importantTodo={importantTodo}
                     folderTodo={folderTodo}
                     todo={todo}
                     key={todo.id}
                  />
               )
            })}
         </ul>
      </div>
   );
}

export default TodoList;