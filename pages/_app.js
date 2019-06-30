import App, { Container } from 'next/app';
import PageLayout from '../components/PageLayout';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // This exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </Container>
    );
  }
}

export default MyApp;
