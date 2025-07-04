import PostsListAdmin from '@/components/Admin/PostListAdmin';

export const dynamic = 'force-dynamic';

export default async function AdminPostPage() {
  return <PostsListAdmin />;
}
