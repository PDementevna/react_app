import React from 'react';
import './style.css'
import Button from "./Button";


export default class GeneralComponent extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
    }

    componentDidMount() {

    }
    increaseValue(){
        this.setState({
            value: this.state.value+1
        })
    }
    decreaseValue(){
        this.setState({
            value: this.state.value-1
        })
    }
    render() {
        return (
            <div>
                <h1>Value is {this.state.value}</h1>
                <Button clicker={this.increaseValue} text={"increase"} />
                <Button clicker={this.decreaseValue} text={"decrease"} />
            </div>
        );
    }
}
