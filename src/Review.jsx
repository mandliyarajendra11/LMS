import React, { useState,memo } from 'react'
import arr from './ReviewArray'

var count=0;
 const Review = () => {
  const[val ,setVal] =useState(count); 
  function prev() {
    if(count>0)
    setVal(--count);
  }
  
  function next() {
    if(count<arr.length-1)
    setVal(++count);
  }
  return (
    <section className="re">
        {console.log("review")}
        <h1>user <span>reviews</span></h1>
        <div className="js">
          <img id="img" src={arr[val].img} alt="review profile" />
          <h2 id="name">{arr[val].name}</h2>
          <p id="text">{arr[val].text}</p>
          <p>{arr[val].rating}</p>
          <div className="btns">
            <button className="btn" onClick={()=>{prev()}} >previous</button>
            <button className="btn" onClick={()=>{next()}} >next</button>
          </div>
        </div>
      </section>
  )
}
export default memo(Review)