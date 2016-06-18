import React, {Component} from 'react';
import Header from './Header/Header';
import InputContainer from './InputContainer/InputContainer';
import TodoList from './TodoList/TodoList';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            task: ''
        };

        this.onTaskAdd = this.onTaskAdd.bind(this);
    }

    onTaskAdd(value){
        this.setState({task: value});
    }

    render() {
        return (
            <div>
                <Header/>
                <InputContainer onTaskAdd={(value)=>{this.onTaskAdd(value)}}/>
                <TodoList task={this.state.task}/>
            </div>
        );
    }
}

export default App;