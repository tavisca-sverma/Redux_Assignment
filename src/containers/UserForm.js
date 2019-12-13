import React,{Component} from 'react';
import FormInput from './FormInput';

class UserForm extends Component {

    render(){
        return (
        <div>

            <FormInput identifier={"First Name"}/>
            <br></br>
            <FormInput identifier={"Last Name"}/>

        </div>
      
     )
         
    }
}

export default UserForm;