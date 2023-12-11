import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  // email: string;
  // firstname: string;
  // lastname: string;
  username: string;
}

const initialState: UserState = {
  // email: "",
  // firstname: "",
  // lastname: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.username = action.payload.username;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
