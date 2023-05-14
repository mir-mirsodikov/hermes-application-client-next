import { Footer } from '@/components/footer';
import { NavigationBar } from '@/components/nav-bar';

export default async function MarketingLayout({
  children,
}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='container'>
        <NavigationBar />
      </header>
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}