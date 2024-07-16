import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Crypto App</title>
        <meta property="title" content="Next.js App" key="title" />
        <meta name="description" content="My Crypto App app made with Next.js" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
