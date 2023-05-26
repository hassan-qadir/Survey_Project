import { createSlice } from "@reduxjs/toolkit";





// export const dataPost = createAsyncThunk(
//        'users/dataPost',
//        async (values) => {
//          const response = await fetch('https://formdata-e0f20-default-rtdb.firebaseio.com/userDatas.json',{
//               method: 'POST',
//               headers: {
//                      'Content-type': 'application/json',
//               },
//               body: JSON.stringify({
//                      values,
//               }), 
//          });
         
//        }
//      )

const initialState = {
       
       addData: localStorage.getItem('login') ? 
       JSON.parse(localStorage.getItem('login')): [],
      
}

const AuthSlice = createSlice({
       name:'addData',
       initialState,
       reducers: {
              addState: (state, action) => {
            state.addData = [...state.addData, action.payload]   
              },

      
       }
})

export const {addState} = AuthSlice.actions
export default AuthSlice.reducer;