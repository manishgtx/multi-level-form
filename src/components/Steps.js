import React from 'react'
import Step from './Step'
import {data} from '../meta/stepData';
const Steps = ({index}) => {
  return (
    <div className='steps-container'>
        <div class="wrapper">
        <div className='steps-wrapper'>
            {data.map((singleData)=> {
                const {id,info} = singleData;
                return <Step key={id} index={index} stepNumber={id} stepInfo={info}/>
            })}
        </div>
        </div>
        
    </div>
  )
}

export default Steps