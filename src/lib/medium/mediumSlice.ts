import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export interface PostProps {
  className?: string;
  description: string;
  excerpt: string;
  guid?: string;
  pubDate: string;
  thumbnail: string;
  title: string;
  content?: string;
}

export interface GetMediumPosts {
  items: PostProps[];
}

/*
 *`createApi` is bundled in the Redux Toolkit Query (RTK Query) library and gives us
 * a simple means of creating redux slices that fetch (GET, POST, etc) from remote
 * resources and generate a consistent `state` interface. Use the exported hook like so:
 * `const { data, isLoading, isError } = useGetMediumPostsQuery();`
 * and you have fast access to loading and error state plus the fetched and cached `data`.
 */
export const mediumApi = createApi({
  reducerPath: 'medium',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.rss2json.com/v1/api.json',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getMediumPosts: builder.query<PostProps[], void>({
      // I could only get this to work by including the full URL below. documentation suggests
      // that I should only need to include `api.json?rss_url=https://medium.com/feed/@telcoin`
      // with the `baseUrl` set above, but no luck. the query ends up targeting `localhost:3000`
      // as the baseUrl.
      query: () =>
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@telcoin',
      transformResponse: (response: GetMediumPosts) => {
        return response.items;
      },
    }),
  }),
});

// Export hooks for usage in functional components. these are auto-generated.
export const {
  useGetMediumPostsQuery,
  util: { getRunningQueriesThunk },
} = mediumApi;

export const { getMediumPosts } = mediumApi.endpoints;
