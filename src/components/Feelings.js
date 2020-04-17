import React from 'react';

// We need to import the connect helper to connect to our Redux state
import {connect} from 'react-redux';

class Feelings extends React.Component{

    constructor(props){
        super(props);
        this.state = {face: ''};
    }

    happy = () => {
        this.setState({
            face: '😄'
        })
    }

    sad = () => {
        this.setState({
            face: '😥'
        })
    }

    mad = () => {
        this.setState({
            face: '🤬'
        })
    }


    render(){

        return(
            <div>
               <h1> {this.props.name}'s feeling right now: <br /> {this.state.face} </h1>
                <button onClick={this.happy}>Happy</button>
                <button onClick={this.sad}>Sad</button>
                <button onClick={this.mad}>Mad</button>
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



export default connect(mapStateToProps)(Feelings);

/*
    The connect helper from Redux allows us to connect to Redux
    We can then use it to mapStateToProps or to dispatch any actions
    we've created. 
*/