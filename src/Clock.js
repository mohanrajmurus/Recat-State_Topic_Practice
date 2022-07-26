import React, { Component } from "react";

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }
    componentDidMount(){
        this.timerId = setInterval(
            () => this.updateTimeDate(),
            1000
            );
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    } 

    updateTimeDate(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return (
            <React.Fragment>
                <h1>Today's Time and Date</h1>
                <h2>{this.state.date.toLocaleString()}</h2>
            </React.Fragment>
        );
    }
}


export default Clock