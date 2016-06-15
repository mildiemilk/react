import React, {Component} from 'react';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: ''
        }
    }

    onInputChange(e){
        let value = e.target.value;
        this.setState({value});
    }

    render() {
        return (
            <div>
                <input onChange={this.onInputChange.bind(this)} value={this.state.value} placeholder="type something here"/>
                <div>
                    Hey!!! Welcome to React world <p/>
                    {this.state.value}
                </div>
            </div>
        );
    }
}

export default App;