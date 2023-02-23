import React from 'react'
import { NavLink } from 'react-router-dom';
import  './header.css'
const Header = () => {
 var prevScrollpos = window.pageYOffset   //return the number of pixel the document scroll verticallyy
window.addEventListener('scroll',()=>{
  var currentScrollPos=window.pageYOffset
  if(prevScrollpos>currentScrollPos){
    document.querySelector('.header').classList.add('po');
 } 
else{
  document.querySelector('.header').classList.remove('po')
  document.getElementById('menu').className="menu uil uil-align-justify"
}
if(currentScrollPos>70)
document.getElementById('t').style.display='block';
else
document.getElementById('t').style.display='none';

prevScrollpos = currentScrollPos;
})

function menu(params) {
  var val=document.querySelector('.div').style.display;
  if(val==="block"){
  document.querySelector('.div').style.display="none";
  document.getElementById('menu').className="menu uil uil-align-justify"
}
  else{ 
  document.querySelector('.div').style.display="block"; 
  document.getElementById('menu').className="menu uil uil-times"  
  }
}
  return (      
            <header className="header">
              <img id="logo" src="/img/logo.png" alt="library" />
              <div className="div">
                <ul className="nav">
                  <li><NavLink  to={`/`}>home</NavLink></li>
                  <li><NavLink to={`about`}>about us</NavLink></li>
                  <li className="drop" onMouseOver={()=>{
                    var a=document.querySelector('.uil-angle-down');
                    a.className='uil-angle-up'
                  }} onMouseOut={()=>{
                    var a=document.querySelector('.uil-angle-up');
                    a.className='uil-angle-down'
                 
                  }}><a href='d' onClick={(e)=>{e.preventDefault()}}>Top categaries <i className="uil uil-angle-down" /></a>
                    <div className="drop-down">
                      <ul>
                        <li><NavLink  to={`coding`}>coding</NavLink></li>
                        <li><NavLink  to={`upsc`}>upsc</NavLink></li>
                        <li><NavLink  to={`physics`}>physics</NavLink></li>
                        <li><NavLink  to={`magic`}>magic</NavLink></li>
                        <li><NavLink  to={`arts`}>arts</NavLink></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <i id='menu' className="menu uil uil-align-justify" onClick={()=>{menu()}} />
            </header>
  )
}

export default Header