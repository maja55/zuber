import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body className="t-8">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
