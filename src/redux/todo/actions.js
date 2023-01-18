import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from "./types";

const addTodoActionCreator = (text) => ({
   type: ADD_TODO,
   payload: {
      text,
      isComplete: false,
      id: Date.now()
   }
})

const toggleTodoActionCreator = (id) => ({
   type: TOGGLE_TODO,
   payload: id
})

const deleteTodoActionCreator = (id) => ({
   type: DELETE_TODO,
   payload: id
})

export {
   addTodoActionCreator,
    toggleTodoActionCreator,
    deleteTodoActionCreator
}