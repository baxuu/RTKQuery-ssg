import React from 'react';

import Card from './Card';

import Carousel from '@/components/Carousel';
import { PostProps } from '@/lib/medium/mediumSlice';

interface BlogProps {
  news: PostProps[];
}

const Blog = ({ news }: BlogProps) => {
  return (
    <div className="bg-gray-200 py-20">
      <h1 className="pb-10 text-center text-4xl font-bold">
        Latest News Releases from Telcoin
      </h1>
      <Carousel
        items={news}
        renderItem={(post) => <Card key={post.pubDate} article={post} />}
        itemsToShow={{ desktop: 3.5, tablet: 2, mobile: 1 }}
      />
    </div>
  );
};

export default Blog;
