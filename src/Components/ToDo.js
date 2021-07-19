import styled from 'styled-components';
import React, {useState} from 'react';




const Button = styled.button`
background-color: crimson;
color: white;
padding: 5px 15px;
&::disabled{
    cursor: default;
    opacity: 0.1;
}
`
let title="Complete"





export default (props) => (
    
    <div  style={{textDecoration: props.todo.complete ? 'line-through': "",border: 'black dashed 1px'} } >{props.todo.text} 
    <Button onClick={props.toggleComplete} >Complete</Button> </div>
);
