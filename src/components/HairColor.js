import React from 'react';

// We need to import the connect helper to connect to our Redux state
import {connect} from 'react-redux';

class HairColor extends React.Component{

    constructor(props){
        super(props);
        this.state = {color: ''};
    }

    red = () => {
        this.setState({
            color: 'red'
        })
    }

    black = () => {
        this.setState({
            color: 'black'
        })
    }

    brown = () => {
        this.setState({
            color: 'rgb(87, 64, 14)'
        })
    }


    blonde = () => {
        this.setState({
            color: 'rgb(212, 196, 106)'
        })
    }


    render(){

        return(
            <div>
               <h1> {this.props.name}'s hair color is: 
                   <br /> <span style={{backgroundColor: this.state.color, color: this.state.color}}> .... </span>    
                </h1>
                <button onClick={this.red}>Red</button>
                <button onClick={this.black}>Black</button>
                <button onClick={this.brown}>Brown</button>
                <button onClick={this.blonde}>Blonde</button>

            </div>
        )

    }

}

/* 
    mapStateToProps is a function that maps our global state to props 
    so we can call different values with this.props
*/
const mapStateToProps = (state) => {
    const {name} = state
    return name;
}



export default connect(mapStateToProps)(HairColor);

/*
    The connect helper from Redux allows us to connect to Redux
    We can then use it to mapStateToProps or to dispatch any actions
    we've created. 
*/