import { useEffect, useState } from "react";
import styles from "./product-item.module.scss";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Images from "./Images";
import Info from "./Info";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import cartService from "shared/cart.service";

function getCostRange(types) {
  const costs = types.map((item) => item.cost);

  const result = {
    min: Math.min(...costs),
    max: Math.max(...costs),
  };

  return result;
}

function ProductType({ productType, checked, onTypeIDChange }) {
  return (
    <span
      className={`${styles.type} ${checked && styles.checkedType}`}
      onClick={() => onTypeIDChange(productType.id)}
    >
      {productType.title}
    </span>
  );
}

export default function ProductItem({ product }) {
  const [error, setError] = useState({
    noTypeChoosen: false,
  });
  // const catalogService = new CatalogService();

  const { min, max } = getCostRange(product.types);

  const [typeID, setTypeID] = useState(null);
  const [desc, setDesc] = useState("");
  const [cost, setCost] = useState(`${min}-${max} руб.`);

  function onTypeIDChange(id) {
    setTypeID(id);
    setError({ ...error, noTypeChoosen: false });
  }

  useEffect(() => {
    if (typeID !== null) {
      const type = product.types.filter((item) => item.id === typeID)[0];

      const cost = `${type.cost} руб.`;

      setCost(cost);

      setDesc(type.description);
    }
  }, [typeID]);

  function addProductToCart() {
    if (typeID === null) {
      setError({ ...error, noTypeChoosen: true });
    } else {
      let newProduct = structuredClone(product);
      newProduct.type = product.types.filter((item) => item.id === typeID)[0];
      delete newProduct["types"];
      delete newProduct["tagsID"];

      cartService.addProductToCart(newProduct, cost);
    }
  }

  return (
    <section className={`${styles.main}`}>
      <div className={`${styles.photos}`}>
        <Images />
      </div>
      <div className={`${styles.mainInfo}`}>
        <h1 className={`${styles.title}`}>{product.title}</h1>
        <span className={`${styles.subtitle}`}>{product.subtitle}</span>
        <div className={`${styles.subinfo}`}>
          <div>
            <StarIcon />
            <span>3 отзыва</span>
          </div>
          <div>
            <CheckCircleOutlineIcon />
            <span>В наличии</span>
          </div>
        </div>
        <div className={`${styles.types}`}>
          {product.types.map((item, index) => {
            return (
              <ProductType
                key={index}
                productType={item}
                checked={typeID === item.id}
                onTypeIDChange={onTypeIDChange}
              />
            );
          })}
        </div>
        <p className={`${styles.desc}`}>{desc}</p>
        <span className={`${styles.cost}`}>{cost}</span>
        <div className={`${styles.btns}`}>
          <button
            onClick={() => addProductToCart()}
            className={`btn btn-primary mt-3 ${
              error.noTypeChoosen === true && "btn-error"
            }`}
          >
            {error.noTypeChoosen === false
              ? "В корзину"
              : "Выберите тип товара"}
          </button>
          <label style={{ height: "100%" }} className="swap">
            <input type="checkbox" />
            <FavoriteBorderIcon
              color="primary"
              className={`${styles.icon} swap-off`}
            />
            <FavoriteIcon
              color="primary"
              className={`${styles.icon} swap-on`}
            />
          </label>
        </div>
      </div>
      <Info properties={product.properties} />
    </section>
  );
}
