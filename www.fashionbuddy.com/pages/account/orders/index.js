import React from "react";

import AccountSidebar from "@/components/AccountSidebar";
import Layout from "@/components/Layout";

import styles from "./orders.module.scss";
import { useAuth } from "@/firebase/context";
import OrderItem from "@/components/OrderItem";
import { useOrders } from "hooks/order.hook";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard/product-card";

export default function Orders() {
    const { user, loading } = useAuth();

    const { data } = useOrders();
    // console.log(data);
    if (!user && !loading) useRouter().push("/login");

    return (
        <Layout noCategories>
            <AccountSidebar />
            <main className={styles.container}>
                <h1 className={styles.title}>My Orders</h1>
                <div className={styles.content}>
                    {data?.length === 0 ? (
                        <span>You have not any order</span>
                    ) : (
                        <div className={styles.orders}>
                            <div className={styles.content}>
                                <div className={styles.products}>
                                    {data?.map((product) => {
                                        return (
                                            <ProductCard
                                                key={product.id}
                                                id={product.id}
                                                brand={product.brand}
                                                name={product.name}
                                                image={product.image}
                                                price={product.price}
                                                sale_price={product.sale_price}
                                                favorite={user?.favorites?.includes(
                                                    product.id
                                                )}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </Layout>
    );
}
