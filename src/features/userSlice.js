import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.user.push(action.payload);
    },
  },
});

export const { addToCart } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
