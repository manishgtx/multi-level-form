import Info from './Info'
import FormControl from './form/FormControl'
const PersonolDetails = ({details,setDetails}) => {
  return (
    <div>
        <Info title='Personol Info' subTitle='Please provide your name,email address, and phone number.'/>
        <FormControl label='name' details={details} setDetails={setDetails}/>
        <FormControl label='email address' details={details} setDetails={setDetails}/>
        <FormControl label='phone number' details={details} setDetails={setDetails}/>
    </div>
  )
}

export default PersonolDetails