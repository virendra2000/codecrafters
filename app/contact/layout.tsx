import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <main>
        {children}
      </main>
  );
}