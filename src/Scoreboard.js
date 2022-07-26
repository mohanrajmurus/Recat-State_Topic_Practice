import React, {Component} from "react";



class Scoreboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            p1Score: 0,
            p2Score: 0
        }
    }

    updateP1Score = () => {
        this.setState({
            p1Score: this.state.p1Score+1
        })
    }
    updateP2Score = () => {
        this.setState({
            p2Score: this.state.p2Score+1
        })
    }
    render() {
        return(
            <React.Fragment>
                <div className="p1Score">
                    <h1>P1 : {this.state.p1Score}</h1>
                    <button onClick={this.updateP1Score}>Click</button>
                </div>
                <div className="p2Score">
                    <h1>P2 : {this.state.p2Score}</h1>
                    <button onClick={this.updateP2Score}>Click</button>
                </div>
            </React.Fragment>
        );
    }
}


export default Scoreboard;