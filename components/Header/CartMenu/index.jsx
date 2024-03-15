import { useEffect, useState } from "react";
import styles from "./cart-menu.module.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import cartService from "shared/cart.service";
import Link from "next/link";

export default function CartMenu() {
  const [cost, setCost] = useState(0);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(cartService.getCartCount());
  }, []);

  function onCartOpen() {
    const cost = parseInt(window.localStorage.getItem("cost"));
    const cart = JSON.parse(window.localStorage.getItem("cart"));

    if (cart) {
      setProducts(cart);
    }
    if (cost) {
      setCost(cost);
    }
  }

  return (
    <>
      <div className="dropdown dropdown-end">
        <div className={`${styles.cartBlock} btn btn-circle `}>
          <div
            onClick={onCartOpen}
            tabIndex={0}
            role="button"
            className="indicator"
          >
            <ShoppingCartOutlinedIcon fontSize="large" />
            <span
              id="cart_item_count"
              className="badge badge-sm indicator-item badge-neutral"
            >
              {count}
            </span>
          </div>
        </div>
        <div
          tabIndex={0}
          className={`${styles.menu} dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52`}
        >
          <ul className={`${styles.items} p-2 shadow bg-base-100`}>
            {
              products.length === 0 &&
              <li>Корзина пуста</li>
            }
            {products.map((item, index) => {
              console.log(item.type);

              return (
                <li key={index}>
                  <Link
                    className={`${styles.item}`}
                    href={`/product/${item.id}`}
                  >
                    <span className={`${styles.title}`}>{item.title}</span>
                    <span className={`${styles.subtitle}`}>
                      {item.subtitle}
                    </span>
                    <span className={`${styles.type}`}>{item.type.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <span className={`${styles.cost}`}>{cost} руб.</span>
          <button className="btn btn-primary w-full">Корзина</button>
        </div>
      </div>
    </>
  );
}
