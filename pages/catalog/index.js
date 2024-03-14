import Layout from "components/Layout";
import Head from "next/head";
import styles from "./catalog.module.scss";
import CatalogFilters from "components/CatalogFilters";
import CatalogService from "shared/catalog.service";
import CatalogItems from "components/CatalogItems";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Catalog({ items, tags }) {
  const { data, error, isLoading } = useSWR("/api/items", fetcher);

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredItems([...data]);
    }
  }, [data]);

  const title = "Каталог";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <main className={`${styles.main}`}>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Главная</a>
              </li>
              <li>
                <b>Каталог</b>
              </li>
            </ul>
          </div>
          <div className={`${styles.catalog}`}>
            <CatalogFilters tags={tags} />
            <CatalogItems items={filteredItems} />
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const catalogService = new CatalogService();

  const items = await catalogService.getItems();
  const tags = await catalogService.getTags();

  return {
    props: {
      items,
      tags,
    },
  };
}
