import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {list: []};
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleOnchange (e) {
        this.setState(previousState => ({
            list: [...previousState.list, e.target.value]
        }));
    }
    handleClick(e) {
        this.state.list.push(this.state.list);
        alert(this.state.list)
    }
    render() {
        return(
            <div>
                <input type="text" value={this.state.list} onChange={this.handleOnchange}/>
                <button onClick={this.handleClick}>Add new to do</button>
                <ul>
                    <li>{this.state.list}</li>
                </ul>
            </div>
        )
    }
}
export default Form;
