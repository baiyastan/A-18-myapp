import React, {Component} from "react";

class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            title: "",
            message: "hello",
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    handleChange = (event) => {
        console.log(event);
        this.setState({title : event.target.value})
    }
    
    render() {
        return(
            <div>
                My Component
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button >Multiply</button>
                <button >Divison</button>
                <h2>{this.state.title}</h2>
                <input onChange={this.handleChange} value={this.state.title} type="text" placeholder="Text" />
                <button >Send</button>
                <h3>{this.state.message}</h3>
            </div>
        )
    }
}

export default MyComponent