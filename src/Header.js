import React from 'react'



const Header = (props) => {
  //click event
  const handleclickMatch =(e)=>{
    console.log(e.target.innerText);

  }
  //double click event
  const handleclickMatch1 =(name)=>{
    console.log(`support for ${name}`);

  }

  return (
    <header>
      <h3 onDoubleClick={()=>handleclickMatch1("NoCaste")}>{props.title}
    </h3>
      </header>

//  <header>
// <h3>NoCaste
// <button onClick={() => handleclickMatch1("tom and jerry") }>🤍</button></h3>
// </header> 

//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''






  )
}

Header.defaultProps={
  title:"caste"
}
export default Header