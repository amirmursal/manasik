import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type UserDetails = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  roleId: any;
  firstname: string;
  lastname: string;
};

type SignUpResponse = {
  content: boolean;
  currentPage: boolean;
  error: null;
  errorObject: null;
  httpStatusCode: number;
  isError: boolean;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

// Define a service using a base URL and expected endpoints
export const signUpApi = createApi({
  reducerPath: "signUpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mahapuleayaz-001-site1.itempurl.com/api",
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResponse, UserDetails>({
      query: ({
        username,
        email,
        password,
        confirmPassword,
        roleId,
        firstname,
        lastname,
      }) => ({
        url: `Auth/self-register`,
        method: "POST",
        body: {
          username,
          email,
          password,
          confirmPassword,
          roleId,
          firstname,
          lastname,
        },
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: any) => response,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignUpMutation } = signUpApi;
