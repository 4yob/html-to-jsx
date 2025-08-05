"use client";
import React from "react";
import styles from './ProductCard.module.css';
import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <div className={styles.productCard}>
            <Image src={product.image} alt={product.title} width={300} height={200} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Preço: R$ {product.price.toFixed(2)}</p>
            <p>Avaliação: {product.rating} ⭐</p>
        </div>
    )
}