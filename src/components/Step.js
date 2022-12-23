import React from 'react'

const Step = ({stepNumber,stepInfo,index}) => {
  return (
    <div className='step-container'>
        <div class={`circle ${stepNumber === index ? 'active': ''}`}>
            <p className={`circle-p ${stepNumber === index && 'active-color'}`}>{stepNumber}</p>
        </div>
        <div className="step-info">
            <h4>{`STEP ${stepNumber}`}</h4>
            <p>{stepInfo}</p>
        </div>
    </div>
  )
}

export default Step