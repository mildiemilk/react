import React,{Component} from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <div>{this.props.task}</div>
                <button>delete</button>
            </div>
        );
    }
}

export default TodoItem;