import { PostModel } from '@/models/post/post-model';

export type PublicPost = Pick<
  PostModel,
  | 'id'
  | 'slug'
  | 'title'
  | 'excerpt'
  | 'author'
  | 'content'
  | 'coverImageUrl'
  | 'createdAt'
  | 'published'
>;

export const makePublicPost = (post: PostModel): PublicPost => {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    content: post.content,
    coverImageUrl: post.coverImageUrl,
    createdAt: post.createdAt,
    published: post.published,
  };
};
