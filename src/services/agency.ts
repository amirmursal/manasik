import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Agency = {
  agencyName: string | undefined;
  mobileNum: string | undefined;
  alternateNum: string | undefined;
  agencyPan: string | undefined;
  agencyGstn: string | undefined;
  ownerAadhar: string | undefined;
};

// Define a service using a base URL and expected endpoints
export const agencyApi = createApi({
  reducerPath: "agencyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    addAgency: builder.mutation<any, Agency>({
      query: (agency) => ({
        url: "/api/agencies/addAgency",
        method: "POST",
        body: agency,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: any) => response,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddAgencyMutation } = agencyApi;
