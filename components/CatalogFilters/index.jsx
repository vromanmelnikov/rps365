import { sortFilters } from "shared/catalog.shared";
import styles from "./catalog-filters.module.scss";
import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Tags from "./Tags";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function CatalogFilters() {
  const { data, error, isLoading } = useSWR("/api/tags", fetcher);

  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (data) {
      setTags(data);
    }
  }, [data]);

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <aside className={`${styles.filterSide}`}>
      <div className={`${styles.filterBtn}`}>
        <span className={`${styles.type}`}>Фильтр</span>
        <span className={`pointer`}>Сбросить</span>
      </div>
      <div className={`${styles.filter}`}>
        <span className={`${styles.type}`}>Сортировка</span>
        <select
          className={`${styles.select} select select-bordered w-full max-w-xs`}
        >
          {sortFilters.map((item, index) => {
            return <option key={index}>{item.name}</option>;
          })}
        </select>
      </div>
      <div className={`${styles.filter}`}>
        <span className={`${styles.type}`}>Цена, руб.</span>
        <div className={styles.costs}>
          <div className={styles.cost}>
            <span>От</span>
            <input
              type="text"
              placeholder="Руб."
              className="input input-bordered "
            />
          </div>
          <div className={styles.cost}>
            <span>До</span>
            <input
              type="text"
              placeholder="Руб."
              className="input input-bordered "
            />
          </div>
        </div>
        <Slider
          // getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </div>
      <div className={`${styles.filter}`}>
        <span className={`${styles.type}`}>Теги</span>
        <Tags tags={tags} />
      </div>
    </aside>
  );
}
