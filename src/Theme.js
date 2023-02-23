import React, { Component } from 'react'

export class Theme extends Component {

  constructor(props){
    super(props);
    this.state={
        theme:"light",
        themes:"dark uil uil-brightness"
    }
  }
  
    fun(){
        if(this.state.theme==="light")
        { 
        this.setState({
                theme:'dim',
        themes:'dark uil uil-cloud-moon'
             })
        
     document.getElementById('logo').style.filter='invert(1)';
    }
    else if(this.state.theme==='dim')
      {
        
    this.setState({
        theme:'dark',
        themes:'dark uil uil-moon'
    })      
  }
      else  {     
     this.setState({
            theme:'light',
        themes:'dark uil uil-brightness'
          })     
     document.getElementById('logo').style.filter='invert(0)';
        }
    }
    componentDidUpdate(props,prevState){
        document.body.setAttribute('data-theme',this.state.theme);    
        document.getElementById('t1').className=this.state.themes;          
    }

    render() {
    return (
        <>
        <i id="t" onClick={()=>{ window.scrollTo({left :0,top : 0,})}} className="top uil uil-arrow-circle-up" />
        <i id="t1" onClick={()=>{this.fun()}} className="dark uil uil-brightness"><p>Theme</p></i>
    </>
    )
  }
}

export default Theme