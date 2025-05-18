import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{
        title: "Hello this is the message",
        id: 1
    }]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
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

        editTodo: (state, action) => {
            const { id, newTitle } = action.payload;
            const todoToEdit = state.todos.find(todo => todo.id === id);
            if (todoToEdit) {
                todoToEdit.title = newTitle;
            }
        }
    }
})

export const {addTodo, editTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer