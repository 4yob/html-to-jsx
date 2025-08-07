"use client";
import React from "react";
import styles from './ProductCard.module.css';
import Image from "next/image";

export default function ProductCard({ title, price, description, image, noImage, imageDescription, reviews, count }) {
    return (
        <div className={styles.productCard}>
            {image ? (
                <Image 
                src={image} 
                alt={imageDescription} 
                width={200}
                height={200}
                className={styles.productImage} />
            ) : (
                <div className={styles.noImage}>
                    <span>{noImage}</span>
                </div>
            )}
            <h2 className={styles.productTitle}>{title}</h2>
            <h3 className={styles.productPrice}>{price}</h3>
            <p className={styles.productDescription}>{description}</p>
            <div className={styles.productRating}>
                <span className="rating">⭐⭐⭐⭐⭐</span>
                <span className={styles.ratingCount}> ({count}) - </span>
                <span className={styles.ratingReviews}>{reviews} avaliações</span>
            </div>
        </div>
    )
}