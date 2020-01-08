import React, { Component } from "react";
import {connect} from "react-redux";

class Compteur extends Component {
 constructor(props){
     super(props);
     this.state ={number:0}
     this.Increase = this.Increase.bind(this)
 }
    Increase ()  {
        this.setState(prevState =>({
            number: prevState.number + 1
        }))
    };

    Decrease = () => {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number - 1
            })
        }
    };

    Reset = () => {
        this.setState({
            number: 0
        })
    }

    render() {
        return (
            <div>
                <h2> Compteur Class</h2>
                <button onClick={this.props.reduxDecreaseNumber}>Decrease(-)</button>
                <button onClick={this.props.reduxResetNumber}>Reset(0)</button>
                <button onClick={this.props.reduxIncreaseNumber}>Increase(+)</button>
                <p>
                    {this.props.number} 
                </p>
            </div>

        )
    };
};
const mapStateToProps = state =>{
    return{
        number:state.number
    };
};

const mapDispatchToProps = dispatch => {
    return {
        reduxDecreaseNumber: () => dispatch({type: "DECREASE" }),
        reduxIncreaseNumber: () => dispatch({type:"INCREASE"}),
        reduxResetNumber: () => dispatch({type:"RESET", value:0})
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Compteur);
