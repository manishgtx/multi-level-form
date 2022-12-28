import {useState} from 'react'
import Info from './Info'
import SingleAddon from './SingleAddon'
const Addon = ({yearly,addons,setAddons,details,setDetails}) => {
    const addAddon = (id,title,price) => {
      const singleAddon = {id,title,price}
      const check = details.addons.find((oldAddon)=> oldAddon.id === id)

      if(check){
        const newData = details.addons.filter((oldAddon)=> oldAddon.id !== id)
        setDetails({...details,addons:newData})
      }
      else{
        const newDetails = {
          ...details,addons:[...details.addons,singleAddon]
        }
        setDetails(newDetails)
      }
      
    }
  return (
    <div>
        <Info title='Pick add-ons' subTitle='Add-ons help enchance your gaming experience.'/>
        {addons.map((data)=> {
          return <SingleAddon key={data.id} yearly={yearly} addAddon={addAddon} {...data} addons={addons} setAddons={setAddons}/>
        })}
    </div>
  )
}

export default Addon