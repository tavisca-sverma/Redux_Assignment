import React,{Component} from 'react';
import {connect} from 'react-redux';

class FormInput extends Component {

    setFocus(identifier) {
      this.props.setFocus(identifier);
    }

    setBlur(identifier) {
      this.props.setBlur(identifier);
    }

    setValue(identifier,value) {
      this.props.setValue(identifier,value);
    }

    render(){
        const {identifier} = this.props;

        return (   
        <div className="formline">
          <label>{identifier}:</label>  

          <input  
          type="text"
          onFocus={() => this.setFocus(identifier)}
          onBlur={() =>this.setBlur(identifier)}
          onKeyUp={(e) =>this.setValue(identifier,e.target.value)}
          ></input>

        </div>
      )
         
    }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setFocus: (identifier) => {
      dispatch({
        type: 'SET_FOCUS',
        identifier
      });
    },
    setBlur: (identifier) => {
      dispatch({
        type: 'SET_BLUR',
        identifier
      });
    },
    setValue: (identifier,value) => {
      dispatch({
        type: 'SET_VALUE',
        identifier,
        payload: value
      });
    }  
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);


