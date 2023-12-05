import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  role: string;
}

const initialState: UserState = {
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserRole: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.role = "agent";
    },
    removeUserRole: (state) => {
      state.role = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserRole, removeUserRole } = userSlice.actions;

export default userSlice.reducer;
