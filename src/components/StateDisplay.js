import React,{Component} from 'react';
import { connect } from 'react-redux';

class StateDisplay extends Component {

    render(){
        const {identifier} = this.props;
        return (
        <div className="stateDisplay">
         <h5>{identifier} State:</h5>
        <label>IsTouched:</label>
        {`${this.props.inputField[identifier].hasTouched}`}
        <br></br>
        <label>HasFocused:</label>
        {`${this.props.inputField[identifier].isFocused}`}
        <br></br>
        <label>Value:</label>  
        {`${this.props.inputField[identifier].value}`}
        </div>
     )
         
    }
}

const mapStateToProps = (state) => {
    return {
        inputField: state.userInputReducer
    }
}

export default connect(mapStateToProps)(StateDisplay);