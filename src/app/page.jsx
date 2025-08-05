"use client";
import React, { use } from "react";
import { useState, useEffect } from "react";
import styles from './page.module.css';
import ProductCard from "../components/ProductCard/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'iPhone 15 Pro Max 256GB',
      price: 'R$ 8.999,00',
      description: 'O mais avançado iPhone já criado...',
      image: '/images/iphone15.jpg',
      rating: {
        stars: 5,
        count: 4.8,
        reviews: 1234
      },
      category: 'smartphones'
    }
  ]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return (
    <div className={styles.container}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}