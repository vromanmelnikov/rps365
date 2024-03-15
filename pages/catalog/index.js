import Layout from "components/Layout";
import Head from "next/head";
import styles from "./catalog.module.scss";
import CatalogFilters from "components/CatalogFilters";
import CatalogItems from "components/CatalogItems";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Catalog({  }) {

  const { data, error, isLoading } = useSWR("/api/items", fetcher);

  const costRange = useSWR('/api/cost-range', fetcher)

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredItems([...data]);


      // catalogService.getCostRange()
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
            <CatalogFilters />
            <CatalogItems items={filteredItems} />
          </div>
        </main>
      </Layout>
    </>
  );
}
