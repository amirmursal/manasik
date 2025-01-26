import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Agency = {
  agencyName: string | undefined;
  mobileNum: string | undefined;
  alternateNum: string | undefined;
  agencyPan: string | undefined;
  agencyGstn: string | undefined;
  ownerAadhar: string | undefined;
};

type AgencyLocation = {
  branchName: string | undefined;
  contactNum: string | undefined;
  emailId: string | undefined;
  address: string | undefined;
  city: string | undefined;
  state: string | undefined;
  country: string | undefined;
  pinCode: string | undefined;
};

type AgencyBank = {
  bankName: string;
  accountNumber: string;
  beneficiaryName: string;
  accountType: string;
  ifsCode: string;
};

type AgencyId = number;
type LocationId = number;

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

      transformResponse: (response: any) => response,
    }),
    addAgencyLocation: builder.mutation<
      any,
      { location: AgencyLocation; agencyId: AgencyId }
    >({
      query: ({ location, agencyId }) => ({
        url: `api/agency/locations/${agencyId}/addLocation`,
        method: "POST",
        body: location,
      }),
      transformResponse: (response: any) => response,
    }),
    addAgencyBank: builder.mutation<
      any,
      { agencyBank: AgencyBank; agencyId: AgencyId; locationId: LocationId }
    >({
      query: ({ agencyBank, agencyId, locationId }) => ({
        url: `api/agency/banks/${agencyId}/${locationId}/addBank`,
        method: "POST",
        body: agencyBank,
      }),
      transformResponse: (response: any) => response,
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useAddAgencyMutation,
  useAddAgencyLocationMutation,
  useAddAgencyBankMutation,
} = agencyApi;
