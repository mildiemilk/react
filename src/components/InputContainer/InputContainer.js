import React,{Component} from 'react';

class InputContainer extends Component{

    constructor(props){
        super(props);

        this.onClickAddTask = this.onClickAddTask.bind(this);
    }

    onClickAddTask(){
        this.props.onTaskAdd(this.refs.addTaskInput.value);
    }

    render(){
        return(
            <div>
                <input ref="addTaskInput" placeholder="Add new task..."/>
                <button onClick={this.onClickAddTask}>Add</button>
            </div>
        );
    }
}

export default InputContainer;