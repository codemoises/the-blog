import clsx from 'clsx';
import { FileTextIcon, HouseIcon } from 'lucide-react';
import Link from 'next/link';

export function MenuAdmin() {
  const navClasses = clsx(
    // 'h-10',
    // 'overflow-hidden',
    'flex flex-col mb-8',
    'bg-slate-900 text-slate-100 rounded-lg',
    'sm:flex-row sm:flex-wrap',
  );
  const linkClasses = clsx(
    'flex items-center justify-start gap-2',
    '[&>svg]:w-[16px] [&>svg]:h-[16px] px-4 rounded-lg',
    'transition hover:bg-slate-800',
    'h-10',
    'shrink-0',
  );
  return (
    <nav className={navClasses}>
      <a className={linkClasses} href='/' target='_blank'>
        <HouseIcon />
        Home
      </a>

      <Link className={linkClasses} href={'/admin/post'}>
        <FileTextIcon />
        Posts
      </Link>
      <Link className={linkClasses} href={'/admin/post'}>
        <FileTextIcon />
        Posts
      </Link>
      <Link className={linkClasses} href={'/admin/post'}>
        <FileTextIcon />
        Posts
      </Link>
      <Link className={linkClasses} href={'/admin/post'}>
        <FileTextIcon />
        Posts
      </Link>
    </nav>
  );
}
