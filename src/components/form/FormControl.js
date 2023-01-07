import React from 'react'
import styled from 'styled-components'
const FormControl = ({label,setDetails,details,errorMessage,required,pattern}) => {
  return (
    <Wrapper>
        <Label for="">{label}</Label>
        <input className='input' type="text" value={details[label]} required={required} pattern={pattern} onChange={(e) =>  setDetails({...details,[label]:e.target.value})}/>
        <Alert>{errorMessage}</Alert>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 32px;
  position: relative;
`
const Label = styled.label`
  display:block;
  margin-bottom: 6px;
  text-transform: capitalize;
`
const Alert = styled.span`

`
const Input = styled.input`
  width: 100%;
`
export default FormControl