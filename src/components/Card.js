import React from 'react'

function Card({id,item,handleClick}) {

  const itemClass = item.stat ? " active " + item.stat : ""


  return (
    <div onClick={()=> handleClick(id)} className={"card" + itemClass}>
      <img src={item.img} alt=''/>
    </div>
  )
}

export default Card