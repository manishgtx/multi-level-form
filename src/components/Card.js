import React from 'react'

const Card = ({id,title,icon,price,subscription,plan,setPlan,details,setDetails,setPlanPrice}) => {
    const handleSubmit = () => {
      const setPrice = subscription ? price*10 : price;
      setPlanPrice(price)
      setDetails({...details,plan:{title,price:setPrice}})
      setPlan(id)
    }
  return (
    <div className={`card ${plan===id && 'blue'}`} onClick={handleSubmit}>
        <img src={icon} alt={title} className='card-img'/>
        <h4 className='card-title'>{title}</h4>
        <p className='card-price'>{subscription ? `$${parseInt(price)*10}/yr` : `$${price}/mo`}</p>
        {subscription && <p className='free'>2 months free</p>}
    </div>
  )
}

export default Card