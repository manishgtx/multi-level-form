import {useState} from 'react'
import Info from './Info'
const PersonolDetails = ({onSubmit,setIndex}) => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({name,email,phone})
      setIndex((index)=> index+1)
    }
  return (
    <form onSubmit={handleSubmit}>
        <Info title='Personol Info' subTitle='Please provide your name,email address, and phone number.'/>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <label>Email Address</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        <label>Phone Number</label>
        <input type="text" onChange={(e) => setPhone(e.target.value)}/>
        <button>Next Step</button>
    </form>
  )
}

export default PersonolDetails