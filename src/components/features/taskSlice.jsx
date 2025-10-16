import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const Base_URL = import.meta.env.VITE_BASE_URL;
const Task_URL = import.meta.env.VITE_TASK_URL;


const initialState = {
    tasks:[],
    loading:false,
    error: null,
    status: 'All'
}

export const fetchTodo = createAsyncThunk("tasks/fetchTodo", async ()=>{
    const url = `${Base_URL}/${Task_URL}?_limit=5`
    const response = await fetch(url);
    const data = await response.json();

    return data.map(task =>({
        id: task?.id,
        title: task?.title,
        description: "",
        status: task?.completed ?"Completed":"Pending"
    }))
})


const taskSlice = createSlice({
   name: "Task",
   initialState,
   reducers:{

   }, 
   extraReducers: (builder)=>{
    builder.addCase(fetchTodo?.pending,(state)=>{
        state.loading= true,
        state.error= null
    }).addCase(fetchTodo.fulfilled,(state,action)=>{
        state.loading= false,
        state.tasks= action?.payload
    }).addCase(fetchTodo.rejected,(state,action)=>{
        state.loading= false,
        state.error= action?.error?.message
    })
   }
})


export default taskSlice.reducer