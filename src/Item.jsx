import React, {Component} from "react";

class ItemComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 6,
            text:"",
            dataArray:[],
        }
    }

    increment = () => {
       this.setState({counter: this.state.counter + 1})
    }

    decrement = () => {
        if(this.state.counter  > 0) {
            this.setState({counter: this.state.counter - 1})
        }

     }

    handleChange = (event) => {
        console.log(event);
        this.setState({text: event.target.value})
    }

    sendText =() => {
        this.setState(prev => ({
            dataArray : [...prev.dataArray, this.state.text]
        }))
    }

    render() {
        return(
            <div>
                <h2>{this.state.counter}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <hr/>
                <input  type="text" value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.sendText}>Add</button>
                <ul>
                    {
                        this.state.dataArray.map((item) => (
                            <li>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ItemComponent