import React, { Component } from 'react';

class Quantity extends Component {
    constructor(props) {
        super(props);
        this.state={
            quanBox:1
        }
    }
    handleBonus=(event)=>{
        if (this.state.quanBox===this.props.quantity){
            return;
        }
        this.setState({
            quanBox: this.state.quanBox+1
        })
    }
    handleMinus=(event)=>{
        if (this.state.quanBox===1){
            return;
        }
        this.setState({
            quanBox: this.state.quanBox-1
        })
    }
    handleChange=(event)=>{
        let value= event.target.value;
        if (isNaN(value)||value<1&&value!==""||value>this.props.quantity){
            return;
        }
        if (value!==""){
            value= parseInt(value);
        }
        this.setState({
            quanBox: value
        })
    }
    handleOver=(event)=>{
        if (event.target.value===""){
            this.setState({
                quanBox: 1
            })
        }
    }
    render() {
        let {quanBox}= this.state;
        return (
            <div className="quan-box">
                <button onClick={this.handleMinus}>-</button>
                <input onBlur={this.handleOver} onChange={this.handleChange} name={quanBox} value={quanBox}/>
                <button onClick={this.handleBonus}>+</button>
            </div>
        );
    }
}

export default Quantity;