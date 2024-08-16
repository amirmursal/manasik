import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Login = {
  username: string;
  password: string;
};

type LoginResponse = {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  userId: number;
  languageId: number;
};

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ayazmm-001-site1.ktempurl.com/api",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Login>({
      query: ({ username, password }) => ({
        url: `Auth/login`,
        method: "POST",
        body: { username, password },
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: any) => response,
    }),
    logout: builder.mutation({
      query: () => ({
        url: `Auth/logout`,
        method: "POST",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useLogoutMutation } = loginApi;
