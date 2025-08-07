import React from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.decorativeElements}>
                <div className={`${styles.circle} ${styles.circle1}`}></div>
                <div className={`${styles.circle} ${styles.circle2}`}></div>
                <div className={`${styles.circle} ${styles.circle3}`}></div>
            </div>
            
            <div className={styles.icon}>🔍</div>
            
            <h1 className={styles.errorCode}>404</h1>
            
            <h2 className={styles.errorTitle}>Página Não Encontrada</h2>
            
            <p className={styles.errorMessage}>
                Desculpe, a página que você está procurando não existe.
            </p>
            
            <Link href="/" className={styles.homeButton}>
                🏄‍♀️ Voltar à navegação
            </Link>
        </div>
    );
}