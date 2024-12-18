import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  email: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    signup: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.email = null;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
