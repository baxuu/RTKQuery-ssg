import { PostProps } from '@/lib/medium/mediumSlice';

type ArticleProps = {
  news: PostProps;
};

const Post = ({ news }: ArticleProps) => {
  return (
    <article className="mx-auto max-w-3xl py-10 px-4">
      <div className="mb-4 flex justify-end"></div>
      <h1 className="mb-4 text-center text-4xl font-bold">{news.title}</h1>

      {news.content && (
        <div dangerouslySetInnerHTML={{ __html: news.content }} />
      )}
    </article>
  );
};

export default Post;
