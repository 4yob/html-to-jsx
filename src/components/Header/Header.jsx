"use client";
import React from "react";
import Image from "next/image";
import styles from './Header.module.css';

export default function Header({ title, subtitle, totalProducts }) {
    return (
        <div className={styles.header}>
            <div>
                <Image src="/img/logo.png" alt="Logo" width={50} height={50} />
            </div>
            <div className={styles.headerText}>
            <h1 className={styles.montserratTitle}> {title}</h1>
            <p className={styles.montserratSubtitle}>{subtitle}</p>
            <p className={styles.montserratText}>{totalProducts}</p>
            </div>
        </div>
    )
}