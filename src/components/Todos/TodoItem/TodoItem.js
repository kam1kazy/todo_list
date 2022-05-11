import React from 'react'
import {
   AiOutlineCloseCircle,
   AiOutlineCheckCircle,
   AiFillFolder,
   AiOutlineExclamationCircle
} from 'react-icons/ai'
import {
   RiCalendarTodoLine
} from 'react-icons/ri'


const TodoItem = (props) => {
   const { todo, removeTodo, completeTodo, importantTodo, folderTodo } = props
   return (
      <li
         className={todo.completed ? 'completed' : '' }
         style={todo.important ? {background: '#cfcfcf'} : {}}
      >
         <div className="todo-item__sideleft">
            <RiCalendarTodoLine/>
         </div>
         <div className="todo-item__content">
            <div className="top">
               <p>{todo.text}</p>
            </div>
            <div className="bot">
               <p>-> cat: <span>{todo.folderTodo}</span></p>
            </div>
         </div>
         <div className="todo-item__state">
            <AiFillFolder onClick={() => folderTodo(todo.id)}/>
            <AiOutlineExclamationCircle onClick={() => importantTodo(todo.id, 'important')}/>
            <AiOutlineCloseCircle onClick={() => removeTodo(todo.id)}/>
            <AiOutlineCheckCircle onClick={() => completeTodo(todo.id, 'completed')}/>
         </div>
   </li>
   );
};

export default TodoItem;