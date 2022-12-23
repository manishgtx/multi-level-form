import {useState} from 'react'
import Info from './Info'
import Card from './Card'
import { cards } from '../meta/cardData'
const SelectPlan = ({onSubmit,setIndex,yearly,setYearly}) => {
    
    const [sub,setSub] = useState({});
    console.log(sub)
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({sub});
        setIndex((index) => index + 1)
    }
  return (
    <form onSubmit={handleSubmit}>
        <Info title='Select your plan' subTitle='you have the option of monthly or yearly billing.'/>
        <div className='cards-container'>
            {
                cards.map((card)=> {
                    return <Card key={card.id} {...card} subscription={yearly} setSub={setSub}/>
                })
            }
        </div>
        <div class="subscription-slider">
            <p>Monthly</p>
            <div class="slider-container">
                <input type="checkbox" name="" id="" className='slider' onChange={(e)=> setYearly(e.target.checked)}/>
            </div>
            <p>yearly</p>
        </div>
        <button type='button' onClick={()=> setIndex((index) => index-1)}>Go Back</button>
        <button type="submit">Next Step</button>
    </form>
  )
}

export default SelectPlan