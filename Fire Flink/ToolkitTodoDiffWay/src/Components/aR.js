import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk("users/fetchData", async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
});

const userSlice = createSlice({
  name: "userData",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers:(builder)=> {
    builder
    .addCase(
    fetchUserData.pending ,(state) => {
      state.loading = true;
      state.error = null; // Reset error state when starting to fetch
    })
    .addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
   .addCase( fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
