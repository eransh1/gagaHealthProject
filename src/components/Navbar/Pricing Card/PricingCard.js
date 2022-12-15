import React from 'react'
import styles from "./PricingCard.module.css"
import checkMark from "../../../images/checkMark.png"


const PricingCard = ({items,setPayNowButtonClick,setPayNowInfo}) => {
console.log(items)
  return (
    <section id={styles.pricingCard} key={items.id}>
        <h1 className={styles.pricingCardTitle}>{items.name}</h1>
        <div className={styles.pricingDetailCont}>
        {items.details.map((item)=>{
            return <>
            <div className={styles.pricingCardFeaturesCont} key={item.id}>
            {item.has?<div className={styles.checkMarkCont}>
        <img src={checkMark} alt="checkMark" />
        </div>:
        <div className={styles.crossMarkCont}>X</div>}
        <p className={styles.pricingCardFeatureHeading}>{item.name}
        <span className={styles.twoDots}>:</span>
        <span className={styles.pricingCardFeatureInfo}>{item.info}</span> 
        </p>
        
        </div>
            </>
        })}
        </div>

        <div className={styles.priceCont}>
            <p className={styles.price}>{items.pricing} <span> for </span> {items.duration}</p>
        </div>

        <button onClick={()=>{setPayNowButtonClick(true);setPayNowInfo(items)}} className={styles.payNowButton}>Pay Now</button>
        
    </section>
  )
}

export default PricingCard