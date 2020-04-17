import React from 'react';

// We need to import the connect helper to connect to our Redux state
import { connect } from 'react-redux';

// We need to import the action we created so we can call it in our form
import { nameChange } from '../actions';

class Person extends React.Component{

    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

/* // changing local state
    // changeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
*/

// changing global state with Redux
    changeName = (event) => {
        this.props.dispatch(nameChange(event.target.value))
    }

    

    render(){

        return(
            <form>
                <h1> My name is: {this.props.name} </h1>
                <br/>

                <input type="text" onChange={this.changeName} />

            </form>
            
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


export default connect(mapStateToProps)(Person);

/*
    The connect helper from Redux allows us to connect to Redux
    We can then use it to mapStateToProps or to dispatch any actions
    we've created. 
    
    In this case we are using it to connect, so the mapStateToProps
    function actually returns our name from the state and allows us to dispatch our
    changeName function
*/
