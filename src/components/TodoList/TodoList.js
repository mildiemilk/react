import React,{Component} from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            todoList: []
        };

        this.renderListItem = this.renderListItem.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let todoList = this.state.todoList;

        todoList.push(nextProps.task);
        this.setState({todoList});
    }

    renderListItem(){
        return this.state.todoList.map((list,i)=>{
            return(
                <li key={i} >
                    <TodoItem task={list}/>
                </li>
            )
        })
    }
    
    render(){
        return(
            <div>
                <ul>
                    {this.renderListItem()}
                </ul>
            </div>        
        )
    }
}

export default TodoList;