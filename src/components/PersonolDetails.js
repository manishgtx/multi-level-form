import Info from './Info'
import FormControl from './form/FormControl'
const PersonolDetails = ({details,setDetails}) => {
  const inputs = [
    {
      id:1,
      name:'username',
      type: "text",
      placeholder: "Username",
      label:'name',
      errorMessage:"This field is required",
      required:true,
      pattern:'^[A-Za-z0-9]{3,16}$'
    },
    {
      id:2,
      name:'email',
      type: "text",
      placeholder: "Username",
      label:'email address',
      errorMessage:"This field is required",
      required:true
    },
    {
      id:3,
      name:'phone',
      type: "text",
      placeholder: "Username",
      label: 'phone number',
      errorMessage:"This field is required",
      required:true
    },
  ]
  return (
    <div>
        <Info title='Personol Info' subTitle='Please provide your name,email address, and phone number.'/>
        {
          inputs.map((input) => {
            const {id,placeholder,label} = input
            return <FormControl key={input.id} {...input} details={details} setDetails={setDetails}/>
          })
        }
    </div>
  )
}

export default PersonolDetails