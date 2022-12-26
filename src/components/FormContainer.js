import {useState} from 'react'
import PersonolDetails from './PersonolDetails';
import SelectPlan from './SelectPlan';
import Addon from './Addon';
import Summary from './Summary'
const FormContainer = ({index,setIndex}) => {
    const [details,setDetails] = useState({name:'','email address': ''});
    const [yearly, setYearly] = useState(false);
    console.log(details)
    const pageDisplay = () => {
        if(index === 1){
            return <PersonolDetails details={details} setDetails={setDetails}/>
        }
        else if(index === 2){
            return <SelectPlan  setIndex={setIndex} yearly={yearly} setYearly={setYearly}/>
        }
        else if(index === 3){
            return <Addon yearly={yearly} index={index} setIndex={setIndex}/>
        }
        else if(index === 4){
            return <Summary yearly={yearly} setYearly={setYearly} details={details} index={index} setIndex={setIndex}/>
        }
        else if(index === 5){
            return <h1>Thank You Page</h1>
        }
    }
  return (
    <div>
        {pageDisplay()}
        <button type='button' onClick={() => setIndex((index)=> index+1)}> Next</button>
    </div>
  )
}

export default FormContainer