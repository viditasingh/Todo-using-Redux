import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{
        title: "Hello this is the message",
        id: 1
    }]
}

const todoSlice = createSlice({
    name: 'todos',
    reducers: {
        addTodo : (state,action) => {
            const todo = {
                id: nanoid(),
                title: action.payload
            }
            
            state.todos.push(todo)
        },

        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((eachTodo)=> eachTodo.id !==action.payload)
        },

        editTodo: (state,action)=>{
            state.todos.map((eachTodo)=>eachTodo.id===action.payload?eachTodo.title = action.payload : eachTodo)
        }
    }
})

export const {addTodo, editTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer