import {useState} from 'react'

const Input = ({title,placeholder,next}) => {
    const [value,setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        next(title,value);
    }
  return (
    <form onSubmit={handleSubmit}>
        <label className='input-label'>{title}</label>
        <input type="text" placeholder={placeholder} className='input-element' onChange={(e)=> setValue(e.target.value)}/>
    </form>
  )
}

export default Input