import { createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name:'Todos',
    initialState:{
        todos: [{
            title: 'Hello Ansub',
            id: nanoid()
        }]
    },
    reducers:{
        addTodo:(state , action)=>{
         state.todos.push({
            title: action.payload.title
         })
        },
        removeTodo:(state , action)=>{
            state.todos.splice(action.payload.index, 1)
        },
        editTodo:(state, action)=>{
            state.todos.splice(action.payload.index, 1 , {
                 title:action.payload.title,
                 id: nanoid()
            })
        }
    }
})

export const {addTodo, removeTodo, editTodo} = todoSlice.actions
export default todoSlice.reducer