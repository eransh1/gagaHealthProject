import React,{ useState } from 'react'
import styles from "./Pricing.module.css"
import PricingCard from '../../components/Navbar/Pricing Card/PricingCard'
import pricingPlans from "../../Pricing Plans/pricingPlans"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Pricing = () => {
   
const [isPayNowButtonClick,setPayNowButtonClick]=useState(false)
const [payNowInfo,setPayNowInfo]=useState(null)
const [mobileNumber,setMobileNumber]=useState("")
const navigate=useNavigate()

const handlePayNowButtonClick=(e)=>{
    e.preventDefault()
    if(mobileNumber===""){toast.error("Kindly Fill Required Input");return}
navigate("/thankYou")
}

  return (
    <>
        <section id={styles.pricing}>
           <div className={styles.pricingHeading}>
            <h1 className={styles.pricingHeadingTitle}>Unlock worry free parenting for you</h1>
            <p className={styles.pricingHeadingSubTitle}>Get Pediatrician led holistic care for your baby</p>
           </div>
           {pricingPlans.map((main)=>{
            return <>
<h1 className={styles.mainPlanName}>{main.planName}</h1>
            
            <div className={styles.pricingContainer} key={main.id}>
            
           {main?.subscription?.map((items)=>{
            return <PricingCard items={items} setPayNowButtonClick={setPayNowButtonClick} setPayNowInfo={setPayNowInfo}/>
           })}

           </div> 
           </>
           })}
           
        </section>

        {isPayNowButtonClick?<section onClick={()=>{setPayNowButtonClick(false);setPayNowInfo(null)}} id={styles.payNowButtonCont}>
           <form onClick={(e)=>{e.stopPropagation()}} className={styles.payNowButtonInfoCont}>
           <ToastContainer/>
            <h1 className={styles.payNowButtonInfoContTitle}>{payNowInfo?.pricing}</h1>
            <p className={styles.enterMN}>Enter Your Mobile Number <span style={{color:'red'}}>*</span> :</p>
            <input onChange={(e)=>setMobileNumber(e.target.value)} type="number" className={styles.MNInput} placeholder="Enter Your Number" required/>
            <div className={styles.haveAnyCouponCont}>
                <input type="text" className={styles.couponInput} placeholder="Have any coupon? Use it here" />
                <button className={styles.applyCouponButton}>Apply Coupon</button>
            </div>
            <div style={{display:"flex"}}><button onClick={handlePayNowButtonClick} className={styles.payNowButton}>Pay Now</button></div>
            
           </form> 
        </section>:null}
    </>
  )
}

export default Pricing