import {useEffect, useState} from 'react'
import PersonolDetails from './PersonolDetails';
import SelectPlan from './SelectPlan';
import Addon from './Addon';
import Summary from './Summary'
import AddonData from '../meta/AddonData';
const FormContainer = ({index,setIndex}) => {
    const [yearly, setYearly] = useState(false);
    const [planPrice,setPlanPrice] = useState(null);
    const [addons,setAddons] = useState(AddonData);
    const [initial,setInitial] = useState(false);
    const [details,setDetails] = useState({name:'',
    'email address': '',
    'phone number': '',
    plan:{
        name:'',
        price: null,
    },
    addons:[] 
        
    });
    console.log(details);
    const [plan,setPlan] = useState(-1);
    const pageDisplay = () => {
        if(index === 1){
            return <PersonolDetails details={details} setDetails={setDetails}/>
        }
        else if(index === 2){
            return <SelectPlan yearly={yearly} setYearly={setYearly} plan={plan} setPlan={setPlan} details={details} setDetails={setDetails} planPrice={planPrice} setPlanPrice={setPlanPrice}/>
        }
        else if(index === 3){
            return <Addon yearly={yearly} addons={addons} setAddons={setAddons} details={details} setDetails={setDetails}/>
        }
        else if(index === 4){
            return <Summary yearly={yearly} setYearly={setYearly} details={details}/>
        }
        else if(index === 5){
            return <h1>Thank You Page</h1>
        }
    }
    useEffect(() => {
        if(initial){
            const newPrice = yearly ? planPrice*10 : planPrice;
        setDetails({...details,plan:{...details.plan,price:newPrice}})
        }
        
    },[yearly,initial])

    useEffect(() => {
        if(initial){
            if(yearly){
                const addonPrice = details.addons.map((addon) => {
                    return {...addon,price:addon.price*10}
                })
                setDetails({...details,addons:addonPrice})
            }
            else {
                const addonPrice = details.addons.map((addon) => {
                    return {...addon,price:addon.price/10}
                })
                setDetails({...details,addons:addonPrice})
            }
        }
        else {
            setInitial(true);
        }
    },[yearly,initial])
  return (
    <div>
        {pageDisplay()}
        <button type='button' className={`prev-btn ${index < 2 && `none` }`} onClick={() => setIndex((index)=> index-1)}> Prev</button>
        <button type='button' onClick={() => setIndex((index)=> index+1)}> Next</button>
    </div>
  )
}

export default FormContainer