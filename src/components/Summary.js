import React, { useState,useEffect } from 'react'
import Info from './Info'
const Summary = ({details,setYearly,yearly,setTotal,total}) => {
  useEffect(()=> {
    let total = 0;
                details.addons.forEach((addon) => {
                    total+=addon.price
                })
                total += details.plan.price
                setTotal(total);
  },[details])
  return (
    <div>
      <Info title='Finishing up' subTitle='Double-check everything looks OK before confirming.'/>
      <div class="summary-container">
        <div class="subscription-type-container">
          <div class="subs-wrapper">
            <h4>Arcade ({yearly ? 'yearly' : 'Monthly'})</h4>
            <p onClick={()=> setYearly(!yearly)}>Change</p>
          </div>
          <p>${details.plan.price}/mo</p>
        </div>
        {/* BR */}
        <hr/>
        {details.addons.map((service)=> {
          const {title,price} = service;
          return <div class="service">
          <p className='service-title'>{title}</p>
          <p className='service-para'>+${price}/mo</p>
        </div>
        })}
      </div>
      <div class="total">
        <p className='total-title'>Total {yearly ? `(per year)` : `(per month)`}</p>
        <p className='total-price'>+${total}/mo</p>    
      </div>
    </div>
  )
}

export default Summary