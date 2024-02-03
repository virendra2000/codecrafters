import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Code Crafters SIP 2024 Batch 3',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <main>
        {children}
      </main>
  );
}