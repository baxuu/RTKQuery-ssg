import React from 'react';
import Image from 'next/image';
import { convert } from 'html-to-text';
import { convertToSlug, formatDate } from '@/helpers/helpers';

import Link from 'next/link';

import { PostProps } from '@/lib/medium/mediumSlice';

interface CardProps {
  article: PostProps;
}

const Card = ({ article }: CardProps) => {
  const excerpt = convert(article.description, {
    baseElements: { selectors: ['p'] }, // only select from <p> elements
    wordwrap: false, // don't add linebreaks
    selectors: [
      // don't include a.href in excerpt
      { selector: 'a', options: { ignoreHref: true } },
    ],
  });

  const excerptWithEllipsis =
    excerpt.length > 200 ? excerpt.substring(0, 200) + '...' : excerpt;

  return (
    <Link href={`/newsroom/${convertToSlug(article.title)}`}>
      <div className="mx-auto h-full w-full overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="relative aspect-video w-full">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="p-4 md:p-6 lg:p-8">
          <div className="mb-4 flex justify-end">
            <span className="text-right text-sm font-light text-gray-500">
              {formatDate(article.pubDate)}
            </span>
          </div>
          <h2 className="mb-4  text-2xl font-bold">{article.title}</h2>
          <p className="text-gray-600">{excerptWithEllipsis}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
