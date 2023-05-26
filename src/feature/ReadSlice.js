import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../data";
//view Data----

export const userRead = createAsyncThunk(
  "userRead",
  async (arg, { rejectWithValue }) => {
    const response = await fetch(
      `https://survey-14931-default-rtdb.firebaseio.com/surveys.json`
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

//Delete Data------

// export const DeleteUser = createAsyncThunk(
//   "DeleteUser",
//   async (id, { rejectWithValue }) => {
//     console.log(id);
//     const response = await fetch(
//       `https://survey-14931-default-rtdb.firebaseio.com/surveys/${id}`,
//       {
//         method: "DELETE",
//       }
//     );
//     try {
//       const result = await response.json();
//       console.log(result);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error.response);
//     }
//   }
// );

export const ReadSlice = createSlice({
  name: "ReadSlice",
  initialState: {
    users: [],
    user: [],
    question: data,
    item: [],
    editor: [],
    loading: false,
    error: null,
  },
  reducers: {
    ViewData: (state, action) => {
      state.user = state.users.filter((item) => item.id === action.payload.id);
    },
    Filterdata: (state, action) => {
      state.item = state.question.filter(
        (item) => item.catageory === action.payload
      );
    },
    Editordata: (state, action) => {
      state.editor = action.payload;
    },
  },
  extraReducers: {
    [userRead.pending]: (state) => {
      state.loading = true;
    },
    [userRead.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [userRead.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //---------
    // [DeleteUser.pending]: (state) => {
    //   state.loading = true;
    // },
    // [DeleteUser.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   console.log(action.payload);
    //   const { id } = action.payload;
    //   state.users = state.users.filter((data) => data.id !== id);
    // },
    // [DeleteUser.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },
});

export const { ViewData, DeleteData, EditFind, Filterdata, Editordata } =
  ReadSlice.actions;
export default ReadSlice.reducer;
