"use client";
import React from "react";
import styles from './Header.module.css';

export default function Header({ title, subtitle, totalProducts }) {
    return (
        <div className={styles.header}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>📊 Total de produtos: {totalProducts}</p>
        </div>
    )
}