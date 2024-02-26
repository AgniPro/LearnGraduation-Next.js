import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (avatar) => ({
        url: "update-user-avatar",
        method: "PUT",
        body:{"avatar": avatar},
        credentials: "include",
      }),
    }),
    editProfile: builder.mutation({
      query: ({ name }) => ({
        url: "update-user-info",
        method: "PUT",
        body: { name },
        credentials: "include",
      }),
    }),
    updatePassword: builder.mutation({
      query: ({ oldPassword , newPassword}) => ({
        url: "update-user-password",
        method: "PUT",
        body: { oldPassword, newPassword},
        credentials: "include",
      }),
    }),
  }),
});

export const { useUpdateAvatarMutation, useEditProfileMutation, useUpdatePasswordMutation } = userApi;
