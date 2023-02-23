import React, { useEffect, useState } from 'react'
import MP from './MP'
import axios from "axios";
const Cat = (props) => {
  const [Arr,setArr]=useState([])
  useEffect(()=>{
    const val=["arts","coding","magic","physic","upsc"];
  axios.get("https://www.googleapis.com/books/v1/volumes?q="+val[props.val]+"&key=AIzaSyBpR6r6UDt1DaWETjqHInF1EkRy5OqrWbY&maxResults=28")
  .then(res=>setArr(res.data.items))
  .catch(console.log("not get data"));

  },[props.val])

return (
  <div className="books-container">
    {
      Arr.length?
      Arr.map((e,i)=>{ 
        let thamb=e.volumeInfo.imageLinks && e.volumeInfo.imageLinks.smallThumbnail;     
        let title=e.volumeInfo.title;
        title=title.substring(0,25)    
        let amount =e.saleInfo.listPrice && e.saleInfo.listPrice.amount;
        let publisher=e.volumeInfo.publisher;
        let prev=e.volumeInfo.previewLink;
        return <div >
             <img src={thamb} alt="book" className="book" />
          <h5 key={Math.random()*10}>{title}</h5>
          <p>publisher: {publisher}</p>
          <p>&#8377;{amount!==undefined ?amount:150}</p>
          <a className='btn' href={prev} target="_blank" rel='noreferrer' >preview</a>

        </div> 
        })
        :MP 
      } 
    </div>
  )
}

export default Cat