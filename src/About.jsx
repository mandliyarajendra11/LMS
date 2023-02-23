import React from 'react'
import  './about.css'
import img from './pic-1.jpg'
import Contact from './Contact'
export const About = () => {
  return (
    <>
    <section className="i">
    <div className="info">
    <h1>about us</h1>
    <p >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure id illum at
      a dolore ex ipsam vel ad quod assumenda nulla earum reprehenderit maxime,
      voluptatibus deleniti. Mollitia impedit iste sequi praesentium ipsa. Esse
      minus veniam repudiandae omnis nam nobis, dolores laudantium quaerat modi
      alias debitis sunt, dolore cupiditate, perferendis id! Lorem ipsum dolor
      sit, amet consectetur adipisicing elit. Obcaecati voluptas quam, velit
      aperiam nostrum
    </p>
    <button className="btn" onClick={()=>{
     window.scrollTo({left :0,top : 2000,bottom:0})
    }} >send the mail <i className="uil uil-envelope"></i></button>
  </div>
    <img className="img" src="/img/about.png" alt='about'/>
</section>
    <section className="owner">
       <div className="ow">
        <img src={img} alt="rajendra" />
        <h2>rajendra mandliya</h2>
        <h4>Frontend developer</h4>
        <p>hello i am Frontend web developer very good knowledge in react ,advanced js also 
          in DSA field i solved almost 450 que related to dsa in c++
        </p>
      </div>
    
     </section>
     <Contact/>
    </>
    )}
