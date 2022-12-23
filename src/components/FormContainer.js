import {useState} from 'react'
import PersonolDetails from './PersonolDetails';
import SelectPlan from './SelectPlan';
import Addon from './Addon';
import Summary from './Summary'
const FormContainer = ({index,setIndex}) => {
    const [details,setDetails] = useState({})
    const [yearly, setYearly] = useState(false);
    console.log(details)
    const handleNext = (data) => {
        setDetails({...details,...data})
    }
    const pageDisplay = () => {
        if(index === 1){
            return <PersonolDetails onSubmit={handleNext} index={index} setIndex={setIndex}/>
        }
        else if(index === 2){
            return <SelectPlan  onSubmit={handleNext} setIndex={setIndex} yearly={yearly} setYearly={setYearly}/>
        }
        else if(index === 3){
            return <Addon yearly={yearly} onSubmit={handleNext} index={index} setIndex={setIndex}/>
        }
        else if(index === 4){
            return <Summary yearly={yearly} setYearly={setYearly} details={details} />
        }
        else if(index === 5){
            return <h1>Thank You Page</h1>
        }
    }
  return (
    <div>
        {pageDisplay()}
    </div>
  )
}

export default FormContainer