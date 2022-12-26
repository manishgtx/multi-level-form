import React from 'react'

const FormControl = ({label,setDetails,details}) => {
  return (
    <div>
        <label for="">{label}</label>
        <input type="text" value={details[label]} onChange={(e) =>  setDetails({...details,[label]:e.target.value})}/>
    </div>
  )
}

export default FormControl