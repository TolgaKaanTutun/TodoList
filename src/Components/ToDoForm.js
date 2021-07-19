import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';

const Button = styled.button`
background-color: Blue;
color: white;
padding: 1px 15px;
`



export default class ToDoForm extends React.Component{


    
    

    state={
        text: ''
    };

   
    
    



    

    handleChange=event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            complete: false,
            id: shortid.generate()

        });
        this.setState({
            text: ""
        });
    }




    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input name="text" value={this.state.text} onChange={this.handleChange} placeholder="Enter new To Do"/>
            <Button onCLick={(event)=>{event.preventDefault();
        this.props.onSubmit({
            text: this.state.text
        });
        this.setState({
            text: ""
        });}
            }>ADD</Button>

            <div >Todo List</div>
            </form>
        ); 
    }
}