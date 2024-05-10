"use client"; // This is a client component
import React, { useState } from 'react';
import styles from './styles.module.css';
import Header from '../header/page';

const Stats = () => {

  return (
    <>
      <Header />
      <main className={styles.main}>
      <section>

        <h1> Minhas estatísticas e conquistas </h1>
      </section>
    </main></>
  )
};
export default Stats;