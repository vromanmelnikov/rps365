import Layout from "components/Layout";
import Head from "next/head";
import CatalogService from "shared/catalog.service";

import styles from "./product.module.scss";
import ProductItem from "components/ProductItem";
import Link from "next/link";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Product({ product }) {
  const title = `${product.title}. ${product.subtitle}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <main className={`${styles.main}`} data-theme="mytheme">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Главная</a>
              </li>
              <li>
                <Link href={"/catalog"}>Каталог</Link>
              </li>
              <li>
                <b>{title}</b>
              </li>
            </ul>
          </div>
          <ProductItem product={product} />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const catalogService = new CatalogService();

  const items = await catalogService.getItems();

  const paths = items.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const catalogService = new CatalogService();

  const product = await catalogService.getItemByID(parseInt(params.id));

  return {
    props: {
      product,
    },
  };
}
