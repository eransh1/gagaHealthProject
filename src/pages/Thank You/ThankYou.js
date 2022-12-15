import React from 'react'
import styles from "./ThankYou.module.css"
import tYCard from "../../images/61qopmmsQSL._SX679_.jpg"

const ThankYou = () => {
  return (
    <>
      <section id={styles.ThankYouCont}>
      <img className={styles.thankYouText} src={tYCard} alt="tyCard" />
      </section>
    </>
  )
}

export default ThankYou