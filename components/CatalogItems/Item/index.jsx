import styles from "./item.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";

function getCostRange(types) {
  const costs = types.map((item) => item.cost);

  const result = {
    min: Math.min(...costs),
    max: Math.max(...costs),
  };

  return result;
}

export default function Item({ item }) {
  const costRange = getCostRange(item.types);

  return (
    <div className={`${styles.item}`}>
      <Link href={`/product/${item.id}`}>
        <div className={`${styles.image}`}></div>
      </Link>
      <div className={`${styles.info}`}>
        <Link href={`/product/${item.id}`}>
          <span className={`${styles.title}`}>{item.title}</span>
        </Link>
        <span className={`${styles.subtitle}`}>{item.subtitle}</span>
      </div>
      <div className={`${styles.btns}`}>
        <button className="btn">
          {costRange.min} - {costRange.max} руб.
        </button>
        <label style={{ height: "100%" }} className="swap">
          <input type="checkbox" />
          <FavoriteBorderIcon
            color="primary"
            className={`${styles.icon} swap-off`}
          />
          <FavoriteIcon color="primary" className={`${styles.icon} swap-on`} />
        </label>
      </div>
    </div>
  );
}
