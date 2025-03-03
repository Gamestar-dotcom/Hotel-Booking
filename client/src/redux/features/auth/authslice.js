import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : sessionStorage.getItem("userInfo")
    ? JSON.parse(sessionStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      sessionStorage.setItem("userInfo", JSON.stringify(action.payload));

      const expirationTime = Date.now() + 1000 * 60 * 60 * 24 * 30;
      localStorage.setItem("expirationTime", expirationTime);
      sessionStorage.setItem("expirationTime", expirationTime);
    },
    logOut: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      sessionStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
