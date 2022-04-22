import React from "react";

import styles from "./cart-item.module.scss";
import { useProduct } from "hooks/product.hook";

export default function CartItem({ id, count, onAdd, onSub }) {
  // const address = useAddress(data.address);
  // const { title, region, city, full_address, zipcode } = address.data;
  // console.log(new Date(data.date));
  // console.log(data.date);
  const { data } = useProduct(id);

  return (
    <div className={styles.container}>
      <img src={`https://ik.imagekit.io/okaydokeymypath/products/${data?.image}`} className={styles.image} loading="lazy" />
      <div className={styles.textContainer}>
        <h4>{data?.name || ""}</h4>
      </div>
      <span className={styles.price}>{data?.price * count || "0"}$</span>
      <div className={styles.buttons}>
        <button onClick={() => onSub(id, count)} >-</button>
        <span>{count || "0"}</span>
        <button onClick={() => onAdd(id, count)}>+</button>
      </div>
    </div>
  );
}
