import Layout from "components/Layout";
import Head from "next/head";

export default function About() {
  const title = "Муфты проходные герметичные";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout >
        <div>
          <h1>Main</h1>
        </div>
      </Layout>
    </>
  );
}
