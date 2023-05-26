import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

 export const userDataFetch = createAsyncThunk('user', async(data, {rejectWithValue})=>{
     const response = await fetch('https://survey-14931-default-rtdb.firebaseio.com/surveys.json',{
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(data)   
    })
     try {
        const result = await response.json();
        return result;
     } catch (error) {
        return rejectWithValue(error.response);
     }
    }
);


export const userSlice = createSlice({
name: 'userSlice',
initialState: {
    users: [],
    loading: false,
    error:null,
},
extraReducers : {
 [userDataFetch.pending] : (state) => {
    state.loading = true;
 },
 [userDataFetch.fulfilled] : (state,action) =>{
    state.loading = false;
    state.users.push(action.payload)
 },
 [userDataFetch.rejected] : (state, action) =>{
    state.loading = false;
    state.error = action.payload
 },
}
})

export default userSlice.reducer;