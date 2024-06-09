import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  role: "Admin",
  isAuthenticated: true,
  status: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.role = action.role;
      state.user = action.user;
    },
  },
});

export const { login } = AuthSlice.actions;

export default AuthSlice.reducer;
