import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
    state.userData= action.payload
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
