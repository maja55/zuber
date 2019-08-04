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
            <link rel="apple-touch-icon" sizes="180x180" href="static/favicon.ico/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="static/favicon.ico/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="static/favicon.ico/favicon-16x16.png"/>
            <link rel="manifest" href="static/favicon.ico/site.webmanifest"/>
            <link rel="mask-icon" href="static/favicon.ico/safari-pinned-tab.svg" color="#927c50"/>
            <link rel="shortcut icon" href="static/favicon.ico/favicon.ico"/>
            <meta name="msapplication-TileColor" content="#927c50"/>
            <meta name="msapplication-config" content="static/favicon.ico/browserconfig.xml"/>
            <meta name="theme-color" content="#927c50"/>
        </Head>
        <body className="t-8">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
