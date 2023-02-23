import React ,{useRef, useState,memo} from 'react'
import emailjs from '@emailjs/browser';
import { NavLink } from 'react-router-dom';
export const Footer = () => {
  const form = useRef();
  const [val,setVal]=useState("");
  var c=localStorage.getItem('count');
  const [count,setCount]=useState(c);
  const sendEmail = (e) => {
    e.preventDefault();
    if(count>=5){
    setVal('abe kitne mail bhejega 5m ruk ab');
     setTimeout(() => {
      setCount(0);
      setVal('');
    }, 500000);
  }
  else{
    emailjs.sendForm('service_0ou379h', 'template_zzjya8j', form.current, 'O8X9yIvWLHHcB3a7o')
      .then((result) => {
        setVal("aa gya mere mail pe msg");
      }, (error) => {

          setVal("kuch error hai check karo apki hai ya fir wait karo hamari hai");
      });
      setTimeout(() => {
          setVal('');
        }, 5000);
        
      setCount(count+1);
      localStorage.setItem('count',count);
    }
  };

  return (
    <footer>
    <section>
      <h4>categaries</h4>
      <p><NavLink  to={`coding`}>coding</NavLink></p>
      <p><NavLink to={`arts`}>arts</NavLink></p>
      <p><NavLink to={`physics`}>physics</NavLink></p>
      <p><NavLink to={`magic`}>magic</NavLink></p>
      <p><NavLink to={`upsc`}>upsc</NavLink></p>
    </section>
    <form ref={form} onSubmit={()=>sendEmail()}>
    <section>
      <h4>contact us</h4>
      <p>email</p>
      <input className="bx-border" type="email" placeholder="enter your email id"  required/>
      <p>message</p>
      <textarea className="bx-border" name="message" placeholder="type your message here"  cols={30} rows={5} defaultValue={""} required />
      <button type="submit" className="btn">submit</button>
    <p className='v' style={{color:"green"}}>{val}</p>
    </section>
    </form>
    <section>
      <h4>about us</h4>
      <p>name</p>
      <p>rajendra mandliya </p>
      <p>role - frontend web developer</p>
      <p>and problem solver 500+que on leetcode and gFG</p>
    </section>
  </footer>

    )
}
export default memo(Footer)