import './App.css';
import React, { Component } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ToDoList from "./Components/ToDoList";



class App extends Component{

  


 

render(){
  return(<div className="App">
    <ToDoList/>
  </div>
  );
}

}

export default App;