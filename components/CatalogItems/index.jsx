import Item from "./Item";
import styles from "./catalog-items.module.scss";

export default function CatalogItems({ items }) {

  return (
    <section className={`${styles.main}`}>
      <div className={`${styles.items}`}>
        {items.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </section>
  );
}
