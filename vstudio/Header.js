import React, { Component } from "react";

class Header extends Component{
  constructor(){
    super();
    this.state = {
      name : "a"
      
    }
  }
    render(){
      var myStyle = {
        //fontSize: 60,
        color: '#013460'
      }
      return(
        <div>
          <h1 style = {myStyle} > Hello, how are you today? </h1>
        </div>
      );
    }
  }

  export default Header;
