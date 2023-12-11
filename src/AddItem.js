import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'


const AddItem = ({newItem,setNewItem,handleSubmit}) => {

const inputRef=useRef()

  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">ADD ITEM</label>
         <input 
         type="text"
         autoFocus
         ref={inputRef}
         id='addItem'
         placeholder='add item'
         required
         value={newItem}
         onChange={(e)=>setNewItem(e.target.value)}
         
         
         />
         <button
         type='submit'
         aria-label='add Item'
         onClick={()=> inputRef.current.focus()}
         >
          <FaPlus />

         </button>

    </form>
   
  )
}

export default AddItem