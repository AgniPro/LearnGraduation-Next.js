import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/` }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (user) => {
        // console.log("Create User Data", user);
        return {
          url: 'register',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json'
          }
        }
      }
    }),
    verifyEmail: builder.mutation({
      query: (user) => {
        return {
          url: `verify-email`,
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json'
          }
        }
      }
    }),
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: `login`,
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json'
          },
          credentials: 'include'  // It is required to set cookie
        }
      }
    }),
    getUser: builder.query({
      query: () => {
        return {
          url: `me`,
          method: 'GET',
          credentials: 'include'
        }
      }
    }),
    logoutUser: builder.mutation({
      query: () => {
        return {
          url: `logout`,
          method: 'POST',
          body: {},
          credentials: 'include'
        }
      }
    }),
    resetPasswordLink: builder.mutation({
      query: (user) => {
        return {
          url: 'reset-password-link',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    resetPassword: builder.mutation({
      query: (data) => {
        const { id, token, ...values } = data
        const actualData = { ...values }
        return {
          url: `/reset-password/${id}/${token}`,
          method: 'POST',
          body: actualData,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
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
      query: ({ password , newPassword}) => ({
        url: "change-password",
        method: "PUT",
        body: { password, newPassword},
        credentials: "include",
      }),
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "get-users",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
})

export const { useGetAllUserQuery,useCreateUserMutation, useVerifyEmailMutation, useLoginUserMutation, useGetUserQuery, useLogoutUserMutation, useResetPasswordLinkMutation, useResetPasswordMutation, useUpdateAvatarMutation, useEditProfileMutation, useUpdatePasswordMutation } = authApi