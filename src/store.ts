import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "./services/login";
import { agencyApi } from "./services/agency";
import { signUpApi } from "./services/signup";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
    [agencyApi.reducerPath]: agencyApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loginApi.middleware,
      signUpApi.middleware,
      agencyApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
