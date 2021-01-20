import React, { Component } from "react";

class Content extends Component {
  render() {
    var myStyle = {
      //fontSize: 60,
      color: "#013460",
    };
    return (
      <div>
        <h3 style={myStyle}> Nice to meet you too.</h3>
      </div>
    );
  }
}
export default Content;
