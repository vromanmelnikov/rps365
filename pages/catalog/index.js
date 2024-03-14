import Layout from "components/Layout";
import Head from "next/head";
import styles from "./catalog.module.scss";
import CatalogFilters from "components/CatalogFilters";
import CatalogService from "shared/catalog.service";
import CatalogItems from "components/CatalogItems";
import { useEffect, useState } from "react";

export default function Catalog({items, tags}) {

  console.log(items)

  const [filteredItems, setFilteredItems] = useState([])

  useEffect(
    () => {
      setFilteredItems([...items])
    }, [items]
  )

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
              <li><b>Каталог</b></li>
            </ul>
          </div>
          <div className={`${styles.catalog}`}>
            <CatalogFilters tags={tags}/>
            <CatalogItems items={filteredItems}/>
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {

  const catalogService = new CatalogService()

  const items = await catalogService.getItems()
  const tags = await catalogService.getTags()

  return {
    props: {
      items,
      tags
    }
  }

}
