import { PostProps } from '@/lib/medium/mediumSlice';
import parse, { domToReact, Element } from 'html-react-parser';

type ArticleProps = {
  news: PostProps;
};

const Post = ({ news }: ArticleProps) => {
  const parser = (input: string) =>
    parse(input, {
      replace: (domNode) => {
        if (domNode instanceof Element && domNode.name === 'h3') {
          return (
            <h1 className="text-blue-500 text-4xl font-bold mt-14 mb-6">
              {domToReact(domNode.children)}
            </h1>
          );
        }
        if (domNode instanceof Element && domNode.name === 'strong') {
          return (
            <span className="text-xl block my-4 font-bold">
              {domToReact(domNode.childNodes)}
            </span>
          );
        }
      },
    });

  return (
    <article className="mx-auto max-w-3xl py-10 px-4">
      <div className="mb-4 flex justify-end"></div>
      <h1 className="mb-4 text-center text-4xl font-bold">{news.title}</h1>

      {news.content && <div> {parser(news.content)} </div>}
    </article>
  );
};

export default Post;
