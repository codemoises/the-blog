import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'The Blog - Este é um blog com Next.js',
    template: '%s | The Blog',
  },
  description: 'Essa seria a descrição dessa página.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body>
        <Container>
          <Header />
          {children}

          <footer>
            <p className='text-6xl font-bold text-center py-8'>FOOTER</p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
