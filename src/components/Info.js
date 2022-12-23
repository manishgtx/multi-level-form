import React from 'react'

const Info = ({title,subTitle}) => {
  return (
    <div className='info-container'>
        <h1 className='info-title'>{title}</h1>
        <p className='info-subtitle'>{subTitle}</p>
    </div>
  )
}

export default Info