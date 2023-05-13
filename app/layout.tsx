import { Footer } from '@/components/footer';
import { NavigationBar } from '@/components/nav-bar';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          montserrat.className +
          ` transition duration-300 ease-in-out flex flex-col justify-between h-screen dark:bg-primary-dark bg-primary-light noise`
        }
      >
        <Providers>
          <div className="container">
            <NavigationBar />
          </div>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
