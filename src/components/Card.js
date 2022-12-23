import React from 'react'

const Card = ({id,title,icon,price,subscription,setSub}) => {
    const handleSubmit = () => {
      let amount = subscription ? price*10 : price;
      const subscriptionData = {
        title,
        price:amount,
      }
      setSub(subscriptionData);
    }
  return (
    <div className='card' onClick={handleSubmit}>
        <img src={icon} alt={title} className='card-img'/>
        <h4 className='card-title'>{title}</h4>
        <p className='card-price'>{subscription ? `$${parseInt(price)*10}/yr` : `$${price}/mo`}</p>
        {subscription && <p className='free'>2 months free</p>}
    </div>
  )
}

export default Card