import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    {/* TODO: Remove unnecessary fonts after choosing title font */}
    <link
      href="https://fonts.googleapis.com/css?family=Calligraffitti|Dancing+Script|Cookie|Lato&display=swap"
      rel="stylesheet"
    />
    <title>Christina and Dan's Wedding</title>
  </Head>
);

export default Meta;
