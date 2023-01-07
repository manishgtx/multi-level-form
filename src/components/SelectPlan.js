import Info from './Info'
import Card from './Card'
import { cards } from '../meta/cardData'
const SelectPlan = ({yearly,setYearly,plan,setPlan,details,setDetails,planPrice,setPlanPrice}) => {
    
  return (
    <form>
        <Info title='Select your plan' subTitle='you have the option of monthly or yearly billing.'/>
        <div className='cards-container'>
            {
                cards.map((card)=> {
                    return <Card key={card.id} {...card} plan={plan} setPlanPrice={setPlanPrice} subscription={yearly} setPlan={setPlan} details={details} setDetails={setDetails}/>
                })
            }
        </div>
        <div class="subscription-slider">
            <p className={`month ${yearly ? '' : 'selected'}`}>Monthly</p>
            <div class="slider-container">
                <input type="checkbox" name="" id="" className='slider' checked={yearly} onChange={()=> setYearly(!yearly)}/>
            </div>
            <p className={`year ${yearly ? 'selected' : ''}`}>Yearly</p>
        </div>
    </form>
  )
}

export default SelectPlan