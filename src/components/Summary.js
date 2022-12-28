import React from 'react'
import Info from './Info'
const Summary = ({details,setYearly,yearly}) => {
  return (
    <div>
      <Info title='Finishing up' subTitle='Double-check everything looks OK before confirming.'/>
      <div class="summary-container">
        <div class="subscription-type-container">
          <div class="subs-wrapper">
            <h4>Arcade ({yearly ? 'yearly' : 'Monthly'})</h4>
            <p onClick={()=> setYearly(!yearly)}>Change</p>
          </div>
          <p>$9/mo</p>
        </div>
        {/* BR */}
        <br/>
        {details.addons.map((service)=> {
          const {title,price} = service;
          return <div class="service">
          <p>{title}</p>
          <p>+${price}/mo</p>
        </div>
        })}
        
      </div>
      <div class="total">
        <p>Total (per month)</p>
        <p>+$12/mo</p>    
      </div>
    </div>
  )
}

export default Summary