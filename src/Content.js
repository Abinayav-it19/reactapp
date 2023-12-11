import React from 'react'
import ItemsList from './ItemsList';


//useState hook
// A data/info which changes its state based on user interaction
//gotcha-  avoid mistakes before error comes

 
const Content = ({items,handleCheck,handleDel}) => {
  

  // const [namepair,setNamepair]=useState("LOVER ❤️");

  // function NametextChanger(){
  //   const names=["FUTURE 😍","LOVER ❤️","PARTNER 😘","RELATIONSHIP🫰🏻","JERRY🐁","TOM 🐭"];
  //   const change=Math.floor(Math.random()*6)
  //   //return names[change]
  //   setNamepair(names[change])
  // }


 // const [name,setName]=useState(name1());
//  const [name,setName]=useState(()=>{name1()});
// function name1(){
//   return console.log("hi")
// }



  // const [count,setCount]=useState(20);

  // function incrementFun(){
  //   setCount((precount)=>{return precount+1})
  //   setCount((precount)=>{return precount+1})
  //   setCount((precount)=>{return precount+1})

  // }
  // function decrementFun(){
  //   setCount(count-1)
  // }
//mapping
// const numbers=[2,3,4,5,-1,0,-2]
//  const num=numbers.map((n)=>({number:n}))
//  console.log(num)


  

  return (

    <>
    
              {items.length ? (
                        <ItemsList
                            items={items}
                            handleCheck={handleCheck}
                            handleDel={handleDel}
                      />

                      ):
                      (
                        <p style={{}}>empty</p>
                      )}
    
 
              {/* <div> Your BEST {namepair} is here 
                  <button onClick={NametextChanger}>click</button> </div> 

                  <button onClick={incrementFun}>+</button>
                  <h4>{count}</h4>
                  <button onClick={decrementFun}>-</button>   */}

      </> 

 
      
  )
  }

export default Content