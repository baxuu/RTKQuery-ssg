import {
  useGetMediumPostsQuery,
  getMediumPosts,
  getRunningQueriesThunk,
  PostProps,
} from '@/lib/medium/mediumSlice';
import { wrapper } from '@/lib/medium/store';
import { GetStaticPaths } from 'next';
import { makeStore } from '@/lib/medium/store';
import Post from '@/components/Blog/Post';
import { useRouter } from 'next/dist/client/router';
import BackToBar from '@/components/BackToBar';
import Blog from '@/components/Blog';
import { convertToSlug, convertFromSlug } from '@/helpers/helpers';

export default function Article() {
  const router = useRouter();

  const title = router.query.title;

  const { data, isLoading, isError } = useGetMediumPostsQuery();

  const post = data?.find((p) => convertFromSlug(p.title) === title);

  return (
    <>
      {post && (
        <>
          <BackToBar path="/newsroom" title="Back to Newsroom" />
          <Post news={post} />
          {data && <Blog news={data} />}
        </>
      )}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const store = makeStore();
  const result = await store.dispatch(getMediumPosts.initiate());

  const paths = result.data?.map((post: PostProps) => {
    const path = `/newsroom/${convertToSlug(post.title)}`;
    return path;
  });

  return {
    paths: paths || [],
    fallback: true,
  };
};
