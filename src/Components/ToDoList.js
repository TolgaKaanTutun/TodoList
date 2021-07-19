import React from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";





export default class ToDoList extends React.Component{

    state={
        todos: []
    };

    addToDO=(todo)=>{
        if(todo.text==""){
            alert("Enter a todo")
            return;
        }
        const newTodos=[todo,...this.state.todos];
        this.setState({
            todos: newTodos
        });
    };

    toggleComplete= (id) =>{
        this.setState({
            todos: this.state.todos.map(todo=>{
                if(todo.id===id){
                    return{
                        id: todo.id,
                        text: todo.text,
                        complete: !todo.complete
                    }
                }
                else {
                    return todo;
                }
            })
        })
    }

    render(){
        return (
            <div>
                <ToDoForm onSubmit={this.addToDO} />
                {this.state.todos.map(todo=>(<ToDo key={todo.id} toggleComplete={()=>this.toggleComplete(todo.id)} todo={todo} />))}
            </div>
        );
    }
}