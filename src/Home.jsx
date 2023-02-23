import React, { useState } from 'react'

import  BookHome  from './BookHome';
import Card from './Card';
import Footer from './Footer';
import  Review  from './Review';
import axios from 'axios';
import { useRef } from 'react';
const Home = () => {
  const input=useRef();
  const [bookData,setData]=useState([]);
  const [valid,setValid]=useState(false);
  function searchBook() {
      let oldval;
      if(input.current.value!==oldval && input.current.value.length>2){
        oldval=input.current.value
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+oldval+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=8')
          .then(res=>setData(res.data.items))
          .catch(console.log("error"));
          window.scrollTo({left :0,top : 500})
          setValid(false)
  }
  else setValid(true);
}
  return (
    <>
        <div className="searchbar-img" />
        <div className="search">
          <section className="searchbar">
            <h1>library management system</h1>
            <h2>when in doubt go to the library</h2>
            <div className="search-btn">
                        <input type="text" placeholder="Enter Your Book Name"
                        ref={input} onKeyPress={(k)=>{if(k.key==="Enter"){searchBook();input.current.value="";}}}
                        />
                        <button onClick={()=>{searchBook();input.current.value="";}} className='btn' >search</button>
                    </div>

                    {
                      valid?
                    <h5 style={{color:"white",backgroundColor:"green"}}>please enter valid or new value</h5>:null}
          </section>
        </div>
        {
          bookData.length?
        <Card bookData={bookData}/>:null       
        
        }
      <BookHome/>
      <Review/>
      <Footer/>
      </>
  )
}

export default Home