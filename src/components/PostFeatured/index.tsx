import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

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
      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          className='text-slate-600 text-sm/tight block'
          dateTime='2025-04-20'
        >
          20/04/2025 10:00
        </time>
        <PostHeading as='h1' url={postLink}>
          Teste
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          officiis sed rem hic velit eligendi iste ipsa voluptas! Illum
          doloribus, voluptatem eveniet velit minima totam nostrum illo vitae
          reprehenderit temporibus?
        </p>
      </div>
    </section>
  );
}
