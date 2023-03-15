import { convert } from 'html-to-text';
import { GetMediumPosts } from './mediumSlice';

export default async function fetchMediumPosts() {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@telcoin'
  );
  const data: GetMediumPosts = await res.json();

  // prepare the posts data for consumption in client
  return data?.items.map((post) => {
    // extract `excerpt` from the HTML string `description`.
    const excerpt = convert(post.description, {
      baseElements: { selectors: ['p'] }, // only select from <p> elements
      wordwrap: false, // don't add linebreaks
      selectors: [
        // don't include a.href in excerpt
        { selector: 'a', options: { ignoreHref: true } },
      ],
    });
    return {
      description: post.description,
      excerpt: `${excerpt.substring(0, 200)}...`,
      guid: post.guid,
      pubDate: post.pubDate,
      thumbnail: post.thumbnail,
      title: post.title,
    };
  });
}
