import {useEffect, useState} from 'react'
import PersonolDetails from './PersonolDetails';
import SelectPlan from './SelectPlan';
import Addon from './Addon';
import Summary from './Summary'
import AddonData from '../meta/AddonData';
import thankYouIcon from '../img/icon-thank-you.svg';
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
        price: 0,
    },
    addons:[],
    });
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
            return <div className='thank-you-page'>
                <img src={thankYouIcon} alt="" className='thank-you-icon'/>
                <h1>Thank you!</h1>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremgaming.com</p>
            </div>
        }
    }

    useEffect(() => {
        if(initial){
            if(yearly){
                const addonPrice = details.addons.map((addon) => {
                    return {...addon,price:addon.price*10}
                })
                const newPlan = {...details.plan,price:planPrice*10}
                setDetails({...details,addons:addonPrice,plan:newPlan})
            }
            else {
                const addonPrice = details.addons.map((addon) => {
                    return {...addon,price:addon.price/10}
                })
                const newPlan = {...details.plan,price:planPrice}
                setDetails({...details,addons:addonPrice,plan:newPlan})
            }
        }
        else {
            setInitial(true);
        }
    },[yearly])
  return (
    <div className='main-form-container'>
        {pageDisplay()}
        <div class={`btns ${index > 4 ? 'none' : ''}`}>
        <button type='button' className={`prev-btn ${index < 2 && `none` }`} onClick={() => setIndex((index)=> index-1)}> Go Back</button>
        <button type='button' className='next-btn' onClick={() => setIndex((index)=> index+1)}>Next Step</button>
        </div>
    </div>
  )
}

export default FormContainer