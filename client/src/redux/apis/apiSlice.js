import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { users_url } from "../constants";

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: users_url,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userInfo?.token; // ✅ Get token safely

      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // ✅ Attach token
      }

      return headers;
    },
    credentials: "include", // ✅ Allow cookies for authentication
  }),
  endpoints: () => ({}),
});

export default apiSlice;
