import styles from "./header.module.scss";
import MainStyles from "../../styles/Main.module.scss";
import Link from "next/link";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import React from "react";
import CartMenu from "./CartMenu";

export default function Header() {
  const links = [
    {
      text: "Каталог",
      href: "/catalog",
    },
  ];

  const tags = [
    {
      name: "Переходное",
    },
    {
      name: "Соеденительное",
    },
    {
      name: "Ремонтное",
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.mainBack}>
        <section className={`${MainStyles.container} ${styles.main}`}>
          <div className={styles.logo}>ЛОГОТИП</div>
          <ul className={styles.links}>
            {links.map((item, index) => {
              return (
                <li className={styles.link} key={index}>
                  <Link href={item.href}>
                    <span>{item.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.infoBlock}>
            <div
              className="tooltip tooltip-bottom"
              data-tip="Нажми и перейди на карту"
            >
              <div className={styles.info}>
                <span>Пн-Сб: 10:00-19:00</span>
                <span>г. Заречный, ул. 20-ая дорога, д. 33</span>
              </div>
            </div>
            <div className={`${styles.phoneBlock} dropdown dropdown-bottom`}>
              <div
                tabIndex={0}
                role="button"
                className={`${styles.makeCall} btn btn-circle`}
              >
                <PhoneEnabledOutlinedIcon fontSize="large" />
              </div>

              <div
                tabIndex={0}
                className={`${styles.phones} dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52`}
              >
                <li>
                  <a>8 (8412) 608-228</a>
                </li>
                <hr />
                <li>
                  <a>8 (8412) 700-495</a>
                </li>
              </div>
            </div>
          </div>
          <div className={styles.functionals}>
            <div className={`${styles.cartBlock} btn btn-circle `}>
              <div className="indicator">
                <FavoriteBorderIcon fontSize="large" />
              </div>
            </div>
            <CartMenu />
          </div>
        </section>
      </div>
      <div className={styles.destinyBack}>
        <section className={`${MainStyles.container} ${styles.destiny}`}>
          <ul className={`${styles.tags}`}>
            {tags.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <li className={`btn btn-ghost`} key={index}>
                    {item.name}
                  </li>
                  {index !== tags.length - 1 && (
                    <div className="divider divider-horizontal"></div>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
          <div className={`${styles.finder}`}>
            <div className="divider divider-horizontal"></div>
            <label className={`input input-bordered flex items-center gap-2`}>
              <input type="text" className="grow" placeholder="Найти товар" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </section>
      </div>
    </header>
  );
}
