import React from 'react'


const Footer = ({length}) => {
    // const year=new Date();


  return (
    // <footer>copyright &copy; {year.getFullYear()} </footer>
  
    <footer>{length} LIST {length===1?"ITEM":"ITEMS"}</footer>
    )
}

export default Footer