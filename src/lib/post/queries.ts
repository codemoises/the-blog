import { postRepository } from '@/repositories/post';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublicPostsCached = unstable_cache(
  cache(async () => await postRepository.findAllPublic()),
  ['posts'],
  {
    tags: ['posts'],
  },
);

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);

export const findPostBySlugCached = (slug: string) =>
  unstable_cache(
    cache(async (slug: string) => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => undefined);

      if (!post) {
        notFound();
      }

      return post;
    }),
    ['posts'],
    {
      tags: [`post-${slug}`],
    },
  )(slug);
