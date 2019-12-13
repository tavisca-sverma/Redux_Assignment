const initialState ={

    "First Name":{
         value:"",
         isFocused: false,
         hasTouched: false
    },
    "Last Name":{
        value:"",
        isFocused: false,
        hasTouched: false
   }

}

const userInputReducer = (state=initialState, action) => {
    const newState = { ... state };
    newState["First Name"] = {...newState["First Name"]};
    newState["Last Name"] = {...newState["Last Name"]};
    switch(action.type) {
        case 'SET_FOCUS':
            //console.log("Called set focus");
            newState[action.identifier].isFocused = true;
            newState[action.identifier].hasTouched = true;
            break;
         case 'SET_BLUR':
            //console.log("Called set BLUR");
            newState[action.identifier].isFocused = false;
            break;
         case 'SET_VALUE':
             //console.log("Called VALUE CHANGE");
             newState[action.identifier].value = action.payload;
             break;
         default:
             break;
      }
      return newState;

}

export default userInputReducer;