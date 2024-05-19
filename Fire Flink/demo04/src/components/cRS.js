import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let callApi = createAsyncThunk("fetchdata", async () => {
        let resolve = await fetch("https://jsonplaceholde.typicode.com/users");
        let data = await resolve.json();
        console.log("data",data);
        return data;
});

let initialState = {
  users: [],
  loading: false,
  error: null,
};

 let CS = createSlice({
  name: "ApiCall",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(callApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(callApi.fulfilled, (state, action) => {
        state.loading = false;
        state.users=action.payload;
      })
      .addCase(callApi.rejected, (state, action) => {
        state.loading = false;
        state.error=action.payload;
      });
  },
});

export default CS.reducer;
