import React, { useState , memo,useEffect} from 'react'
import  Shayri  from './Shayri'
import './App.css'
import axios from 'axios'
import MP from './MP'
const BookHome = () => {

  const [BookData,setData]=useState([]);
  const [BooksData,setDatas]=useState([]);
 
  useEffect(()=>{

    axios.get("https://www.googleapis.com/books/v1/volumes?q=popular&key=AIzaSyAFZzRjCOg4hZUGBKJgTiHg_AAqaezjoGk&maxResults=8")
    .then(res=>setData(res.data.items)) 
     .catch(err=>console.log(err));
     axios.get("https://www.googleapis.com/books/v1/volumes?q=new&key=AIzaSyAFZzRjCOg4hZUGBKJgTiHg_AAqaezjoGk&maxResults=8")
     .then(res=>setDatas(res.data.items)) 
     .catch(err=>console.log(err));
   },[]);
    return (
        <>
         <section className="books">
      
        <h1>most <span>popular</span></h1>
        <div className="books-container">
           {
             BookData.length?
             BookData.map((e,i)=>{
              let thamb=e.volumeInfo.imageLinks && e.volumeInfo.imageLinks.smallThumbnail;     
              let title=e.volumeInfo.title;
              title=title.substring(0,25)    
              let amount =e.saleInfo.listPrice && e.saleInfo.listPrice.amount;
              let publisher=e.volumeInfo.publisher;
              let prev=e.volumeInfo.previewLink;
              return <div >
                   <img src={thamb} alt="book" className="book" />
                <h5 key={i+title.length} >{title}</h5>
                <p>publisher: {publisher}</p>
                <p>&#8377;{amount}</p>
                <a className='btn' href={prev} target="_blank" rel='noreferrer' >preview</a>
  
              </div>
              
              })
              :MP
              
    }
        </div>
      </section>
      <Shayri/>
      <section className="books">
      <h1>most <span>recent</span></h1>
      <div className="books-container">
      {
            BooksData.length?
             BooksData.map((e,i)=>{
              let thamb=e.volumeInfo.imageLinks && e.volumeInfo.imageLinks.smallThumbnail;     
              let title=e.volumeInfo.title;
              title=title.substring(0,25)    
              let amount =e.saleInfo.listPrice && e.saleInfo.listPrice.amount;
              let publisher=e.volumeInfo.publisher;
              let prev=e.volumeInfo.previewLink;
              return <div >
                   <img src={thamb} key={title} alt="book" className="book" />
                <h5 key={i}>{title}</h5>
                <p>publisher: {publisher}</p>
                <p>&#8377;{amount}</p>
                <a className='btn' href={prev} target="_blank" rel='noreferrer' >preview</a>
  
              </div>})
              :MP
           }
      </div>
    </section>
      </>
    )
}
export default memo(BookHome)