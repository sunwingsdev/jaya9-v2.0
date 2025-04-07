import baseApi from "../../baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Register a user
    addUser: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    // Register as an agent
    addAgent: builder.mutation({
      query: (data) => ({
        url: "/users/agentregistration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    // Login a user
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
      providesTags: ["users"],
    }),

    // Login an agent
    loginAgent: builder.mutation({
      query: (credentials) => ({
        url: "/users/agent/login",
        method: "POST",
        body: credentials,
      }),
      providesTags: ["users"],
    }),

    // Fetch authenticated user
    getAuthenticatedUser: builder.query({
      query: (token) => ({
        url: "/users/profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["users"],
    }),

    // get all users
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),

    // get all agents
    getAgents: builder.query({
      query: () => "/users/agent",
      providesTags: ["users"],
    }),

    getUserById: builder.query({
      query: (id) => `/users/single-user/${id}`,
      providesTags: ["users"],
    }),

    getAgentById: builder.query({
      query: (id) => `/users/single-agent/${id}`,
      providesTags: ["users"],
    }),

    // Update agent status
    updateAgentStatus: builder.mutation({
      query: ({ id, status, email, token }) => ({
        url: `/users/updateagentstatus/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { status, email },
      }),
      invalidatesTags: ["users"],
    }),

    // Update agent details
    updateAgent: builder.mutation({
      query: ({ id, data, token }) => {
        if (!id || !data || Object.keys(data).length === 0) {
          throw new Error("Agent ID or update data is missing"); // Validate before query
        }
        return {
          url: `/users/update-agent/${id}`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: data,
        };
      },
      invalidatesTags: ["users"], // Update cache for user-related data
    }),

    // Update user profile image
    updateUserProfileImage: builder.mutation({
      query: ({ id, profileImage, token }) => ({
        url: `/users/update-user-image/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { profileImage },
      }),
      invalidatesTags: ["users"],
    }),

    // ✅ Login as Agent (Admin logs in as an agent)
    loginAsAgent: builder.mutation({
      query: (username) => ({
        url: "/users/admin/login-as-agent",
        method: "POST",
        body: { username },
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useAddAgentMutation,
  useLoginUserMutation,
  useLoginAgentMutation,
  useLazyGetAuthenticatedUserQuery,
  useGetUsersQuery,
  useGetAgentsQuery,
  useLazyGetUserByIdQuery,
  useGetAgentByIdQuery,
  useLazyGetAgentByIdQuery,
  useUpdateAgentStatusMutation,
  useUpdateAgentMutation,
  useUpdateUserProfileImageMutation,
  useLoginAsAgentMutation,
} = usersApi;
