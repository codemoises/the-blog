import { ManagerPostForm } from '@/components/Admin/ManagerPostForm';

export const dynamic = 'force-dynamic';

export default async function AdminPostPage() {
  return (
    <>
      <h1>Criar Post</h1>
      <ManagerPostForm />
    </>
  );
}
