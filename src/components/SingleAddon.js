const SingleAddon = ({price,title,subTitle,yearly,checked,addons,setAddons,id,addAddon}) => {
    const handleAddon = (e) => {
      const newData = addons.map((addon) => {
        if(addon.id === id) {
          return {...addon,checked:e.target.checked}
        }
        return addon
      })
      setAddons(newData);
      const newPrice = yearly ? price*10 : price
      addAddon(id,title,newPrice)
    }
  return (
    <div className={`single-addon ${checked ? 'blue' : ''}`}>
        <div class="checkbox-wrapper">
            <input type="checkbox" className="checkbox-input" name="" checked={checked} onChange={handleAddon} id=""/>
            <div class="addon-info-wrapper">
                <h4>{title}</h4>
                <p>{subTitle}</p>
            </div>
        </div>
        <p className="addon-price">{`+$${yearly ? `${price*10}/yr` : `${price}/mo`}`}</p>
    </div>
  )
}

export default SingleAddon