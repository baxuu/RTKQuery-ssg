import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Hero />
      <Component {...pageProps} />
    </Layout>
  );
}
