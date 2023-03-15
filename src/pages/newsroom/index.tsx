import {
  useGetMediumPostsQuery,
  getMediumPosts,
  getRunningQueriesThunk,
} from '@/lib/medium/mediumSlice';
import { wrapper } from '@/lib/medium/store';

import Blog from '@/components/Blog';
import Hero from '@/components/Hero';

export default function Newsroom() {
  const { data, isLoading, isError } = useGetMediumPostsQuery();

  return (
    <>
      <Hero />
      {data && <Blog news={data} />}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error loading data</div>}
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getMediumPosts.initiate());

  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {},
  };
});
