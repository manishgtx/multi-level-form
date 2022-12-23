import {useState} from 'react'
import Info from './Info'
import SingleAddon from './SingleAddon'
import AddonData from '../meta/AddonData'
const Addon = ({yearly,onSubmit,index,setIndex}) => {
  const [addons,setAddons] = useState([]);
  console.log(addons)
    const handleAddonSubmit = (e) => {
        e.preventDefault();
        onSubmit({addons})
        setIndex((index)=> index+1)
    }
    const addAddons = (title,price) => {
      const addonPrice = yearly ? price*10 : price;
      const addon = {title,addonPrice};
      const check = addons.find((oldAddon)=> {
        return oldAddon.title === addon.title;
      })
      if(check){
        const newAddons = addons.filter((oldAddon)=> {
          return addon.title!== oldAddon.title
        })
        setAddons(newAddons)
      }
      else {
        setAddons([...addons,addon])
      }
    }
  return (
    <form onSubmit={handleAddonSubmit}>
        <Info title='Pick add-ons' subTitle='Add-ons help enchance your gaming experience.'/>
        {AddonData.map((data)=> {
          return <SingleAddon key={data.id} yearly={yearly} addAddons={addAddons} {...data} addons={addons} setAddons={setAddons}/>
        })}
        <button type="submit">Next</button>
    </form>
  )
}

export default Addon