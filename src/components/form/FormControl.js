import React from 'react'

const FormControl = ({label,setDetails,details,errorMessage,required,pattern}) => {
  return (
    <div className='formInput'>
        <label for="">{label}</label>
        <input type="text" value={details[label]} required={required} pattern={pattern} onChange={(e) =>  setDetails({...details,[label]:e.target.value})}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormControl