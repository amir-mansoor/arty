import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  credentials: "include",
});

async function fetchBaseQueryWithAuth(args, api, extra) {
  const result = await baseQuery(args, api, extra);

  return result;
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQueryWithAuth,
  endpoints: (builder) => ({}),
});
