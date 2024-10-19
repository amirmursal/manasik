import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  firstName: string;
  lastname: string;
  role: string;
  email: string;
  isFirstTimeUser: boolean;
}

const initialState: UserState = {
  firstName: "",
  lastname: "",
  role: "",
  email: "",
  isFirstTimeUser: true
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
      state.firstName = action.payload.firstName;
      state.lastname = action.payload.lastname;
      state.role = action.payload.role;
      state.email = action.payload.email;
      state.isFirstTimeUser= action.payload.isFirstTimeUser;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
