import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
   name: 'toolkit',
   initialState: {
      r_todos: []
   },
   reducers: {
      addTodoReducer(state, action) {
         state.r_todos.push(action.payload)
      },

      removeTodoReducer(state, action) {
         const updatedTodos = state.r_todos.filter((todo) => todo.id !== action.payload)
         return { ...state, r_todos: updatedTodos }
      },

      changePropsTodoInReducer(state, action) {
         let updatedTodos = {...action.payload}
         return { ...state, r_todos: updatedTodos }
      },
   }
})

export default toolkitSlice.reducer

export const {addTodoReducer, removeTodoReducer, changePropsTodoInReducer} = toolkitSlice.actions

