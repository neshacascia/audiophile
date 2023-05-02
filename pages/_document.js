import { Html, Head, Main, NextScript } from 'next/document';
import Layout from '@/components/Layout';

export default function Document() {
  return (
    <Layout>
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </Layout>
  );
}
