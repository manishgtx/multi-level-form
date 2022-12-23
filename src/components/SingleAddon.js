import {useState} from 'react'

const SingleAddon = ({price,title,subTitle,yearly,addAddons}) => {
    const [checked,setChecked] = useState(false);
    console.log(checked)
    const handleAddon = (e) => {
      setChecked(e.target.checked);
      addAddons(title,price)
    }
  return (
    <div>
        <div class="checkbox-wrapper">
            <input type="checkbox" name="" checked={checked} onChange={handleAddon} id=""/>
            <div class="addon-info-wrapper">
                <lable>{title}</lable>
                <p>{subTitle}</p>
            </div>
        </div>
        <p>{`+$${yearly ? `${price*10}/yr` : `${price}/mo`}`}</p>
    </div>
  )
}

export default SingleAddon