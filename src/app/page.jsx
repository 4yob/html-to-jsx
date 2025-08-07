"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from './page.module.css';
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../data/products.js";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
    {products.length === 0 ? (
      <Image src="/img/loading.gif" width={100} height={100} alt="Loading" />
    ) : (
      products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
          noImage={product.noImage}
          imageDescription={product.imageDescription}
          count={product.rating.count}
          reviews={product.rating.reviews}
        />
      ))
    )}
  </div>
  
  );
}