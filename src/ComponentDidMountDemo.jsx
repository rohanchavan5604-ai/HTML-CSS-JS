import React, { Component } from 'react'

export default class ComponentDidMountDemo extends Component 
{
    componentDidMount()
    {
        let element=document.getElementById("name")
        element.addEventListener("keydown",this.handlekeydown)
        element.style.color="red";
        element.style.backgroundColor="yellow";
    }
    handlekeydown=(event)=>
   {
      console.log(event.key);
   }
  render()
  {

    return (

      <div>
        Enter firstname:<input type="text" id="name"></input>
      </div>

    )
  }
}