import Head from "next/head";
import styles from "./cart.module.scss";

import Layout from "components/Layout";
import CartItem from "@/components/CartItem";
import { useCart, useCartOnce } from "hooks/cart.hook";
import React, { useEffect, useState } from "react";
import { auth, db } from "@/config/firebase";
import { useAuth } from "@/firebase/context";
import { addToCart, submitOrders } from "@/firebase/product";
import { useRouter } from "next/router";
import Button from "@/components/Button";

export default function CartPage() {
  const { user, loading } = useAuth();
  const { data } = useCart();
  console.log(data)
  const cartLength = Object.keys(data).length;

  // const cartItems =
  //   cartLength > 0
  //     ? Object.keys(data)
  //         .map((item) => {
  //           return {name: item,
  //            }
  //         })
  //         .flat(1)
  //     : [];

  // const sizeCount = cartItems.reduce(
  //   (acc, value) => ({
  //     ...acc,
  //     [value.name + "__size__" + value.size]:
  //       (acc[value.name + "__size__" + value.size] || 0) + 1,
  //   }),
  //   {}
  // );

  // const cartItemsArray = [
  //   ...new Set(
  //     cartItems.filter(
  //       (v, i, a) =>
  //         a.findIndex((t) => t.name === v.name) === i
  //     )
  //   ),
  // ].map((item) => {
  //   return { ...item, count: sizeCount[item.name] };
  // });

  const addCartEvent = (id) => {
    const newCart = {
          ...data,
          [id]: data.hasOwnProperty(id) ? data[id]+1 : 1,
        };
    addToCart(newCart);
  };

  const submitOrder = () => { 
    submitOrders(data)
    addToCart({})
  }

  const subCartEvent = (id) => {
    let newCart = {...data}
    if(data[id] === 1) {
      delete newCart[id]
    }
    else { newCart = {
      ...data,
      [id]: data[id]-1,
    };
  }
addToCart(newCart);
  }

  const router = useRouter();

  if (!loading && !user && typeof window !== "undefined") router.push("/login");

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>My Cart</h1>
            <h4>You have {cartLength} items in your cart</h4>
            {!!cartLength && <span style={{width: '300px'}} >
            <Button style={{ margin: 0 }} onClick={addCartEvent}>
                Buy Now
              </Button>
              </span>}
          </div>
          {Object.keys(data).map((item, index) => {
            return (
              <CartItem
                key={index}
                id={item}
                count={data[item]}
                onAdd={addCartEvent}
                onSub={subCartEvent}
              />
            );
          })}
          {!!cartLength && <span style={{display: 'block', width: '300px'}} >
            <Button style={{ margin: 0 }} onClick={submitOrder}>
                Buy Now
              </Button>
              </span>}
        </main>
      </div>
    </Layout>
  );
}
