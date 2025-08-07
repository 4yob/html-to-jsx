"use client";
import React from "react";
import styles from './Header.module.css';

export default function Header({ title, subtitle, totalProducts }) {
    return (
        <div className={styles.header}>
            <h1 className={styles.montserratTitle}> {title}</h1>
            <p className={styles.montserratSubtitle}>{subtitle}</p>
            <p className={styles.montserratText}>📊 Total de produtos: {totalProducts}</p>
        </div>
    )
}