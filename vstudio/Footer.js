import React, { Component } from "react";
class Footer extends Component {
  render() {
    var myStyle = {
      //fontSize: 60,
      color: "#013460",
    };
    return (
      <div>
        <h4 style={myStyle}>Good Night...</h4>
        ----------------------------------------
        <p> Test props???</p>
        <p>{this.props.title}</p> 
        <p>{this.props.name}</p> 
        <p>{this.props.id}</p>
      </div>
    );
  }
}
export default Footer;
