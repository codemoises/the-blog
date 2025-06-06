import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';

export function PostFeatured() {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_9.png',
          alt: 'Alt da imagem',
          priority: true,
        }}
      />
      <PostSummary
        postHeading={'h1'}
        postLink={postLink}
        createdAt={'2025-01-15T04:54:26'}
        title={'Organização pessoal: por onde começar'}
        excerpt={
          'Por exemplo, ele pode dividir o código em partes menores para que o navegador só carregue o que for necessário.'
        }
      />
    </section>
  );
}
