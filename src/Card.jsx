import React ,{memo }from 'react'

const Card = (props) => {
  return (
    <div className="books-container">
     
    {
        props.bookData.map((e,i)=>{ 
            let thamb=e.volumeInfo.imageLinks && e.volumeInfo.imageLinks.smallThumbnail;     
        let title=e.volumeInfo.title;
        title=title.substring(0,25)    
        let amount =e.saleInfo.listPrice && e.saleInfo.listPrice.amount;
        let publisher=e.volumeInfo.publisher;
        let prev=e.volumeInfo.previewLink;
        return <div >
             <img src={thamb} alt="book" className="book" />
          <h5 key={title}>{title}</h5>
          <p>publisher: {publisher}</p>
          <p>&#8377;{amount?amount:"150rs"}</p>
          <a className='btn' href={prev} target="_blank" rel='noreferrer' >preview</a>

        </div> 
         }
        )
    } 
    </div>
    
  )
}

export default memo(Card)