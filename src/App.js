//import logo from './logo.svg';
//import './App.css';

import Header from './Header'; 
import Content from './Content';
import Footer from './Footer';
import { useState,useEffect } from 'react';
import './index.css';
import AddItem from './AddItem';
import SearchItem from './SearchItem'
import apiRequest from './apiRequest';


function App() {
  const API_URL = 'http://localhost:3500/items';


  const [items,setItems]=useState([]);
  const [search,setSearch]=useState('') 
  const [fetchError,setFetchError]=useState(null)
  const [isLoading,setIsLoading]=useState(true)

  // best practice if data not coming - app should not crashed
  //  const [items,setItems]=useState(JSON.parse(localStorage.getItem('matrimony')||[])
   useEffect(()=>{
    const fetchItems=async()=>{
      try{
        const response=await fetch(API_URL);
        if(!response.ok) throw Error("data not received");
        //console.log(response)
        const listItems=await response.json();
        setItems(listItems)
        setFetchError(null)

      }catch(err){
        setFetchError(err.message)
    }finally{
      setIsLoading(false)
    }
  }
  setTimeout(()=>{
    (async()=>await fetchItems())()
  },2000) 
  },[])



  const handleCheck=async (id)=>{
   // console.log(`id:${id}`)
   const listItems=items.map((item)=>item.id===id?
   {...item,checked:!item.checked}:item)
  setItems(listItems)

  const myItem=listItems.filter(item=>item.id===id)
  const updateOptions={
    method:'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({checked:myItem[0].checked})
  }
  const reqUrl=`${API_URL}/${id}`
   const result= await apiRequest(reqUrl,updateOptions)
   if(result) setFetchError(result)
 

  //localStorage.setItem("matrimony",JSON.stringify(listItems))
  }




  const handleDel=async(id)=>{
    const listItems=items.filter((item)=>
    item.id!==id)
   setItems(listItems)
   const deleteOptions={
    method:'DELETE'
   }

   const reqUrl=`${API_URL}/${id}`
   const result= await apiRequest(reqUrl,deleteOptions)
   if(result) setFetchError(result) 

   //localStorage.setItem("matrimony",JSON.stringify(listItems))
  
  }






  const handleSubmit=(e)=>{
    e.preventDefault()
    
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem('')

  }


  const [newItem,setNewItem]=useState('')
   
 

  const addItem=async (item)=>{
    const id=items.length?items[items.length-1].id+1:1;
    const addNewItem={id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems)

    const postOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(addNewItem)
    }
     const result= await apiRequest(API_URL,postOptions)
     if(result) setFetchError(result)
   // localStorage.setItem("matrimony",JSON.stringify(listItems))
  }
 
  
  

  return (
    <div className='App'>
      <Header title="To do list app"/> 
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />

      <SearchItem 
      search={search}
      setSearch={setSearch}
      />

     <main>
      {isLoading && <p>loading items....</p>}
       
      {fetchError &&<p>{`Error:${fetchError}`}</p>}
       { !isLoading&&!fetchError && <Content 
        items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDel={handleDel}
        />}
      </main>

      <Footer 
      length={items.length}
      />

    </div> 
  );
}

export default App;
