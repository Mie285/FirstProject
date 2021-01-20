import React, { Component } from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


class Runner extends Component {
  render(){
    return (
      <div> 
        <center>
          <h1> This is just a tester running</h1>
        </center>
        <Header/>
        <Content/>
        <Footer title = "prop" name = "per" id = "ties"/>
      </div>
      );
  }
}

export default Runner;
