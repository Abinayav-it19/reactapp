import React from 'react'
import LineItems from './LineItems'


const ItemsList = ({items,handleCheck,handleDel}) => {
  return (
    
    <ul>
        
    {
     items.map((item)=>(
      <LineItems
            item={item}
            key={item.id}
            handleCheck={handleCheck}
            handleDel={handleDel}
    />   
    )
    )
    }
</ul>
  )
}

export default ItemsList
