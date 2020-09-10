import React from 'react';
import './style.css'


export default class Button extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {

    }


    render() {
        return (
            <button onClick={()=>{this.props.clicker()}}>
                {this.props.text}
            </button>
        );
    }
}
