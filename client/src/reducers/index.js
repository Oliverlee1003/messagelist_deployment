import * as actionTypes from '../actions/actions'

// const initialState = {
//     messages: ["Oliver's first message!", 
//     "Oliver's second message!", 
//     "Oliver's third message!"],
//     detailMessage: "",
//     detailMessageShown: false
// }

const initialState = {
    messages: [],
    detailMessage: "",
    detailMessageShown: false
}


const reducer = (state = initialState, action) => {
    
    switch(action.type){

        case actionTypes.GET_ALL_MESSAGES_SUCCESS:  
        return{
            ...state,
            messages: action.response
        }

        case actionTypes.ADD_MESSAGE_SUCCESS:
        return{
            ...state,                                        // we shouldn't mutate old state.       
            messages: state.messages.concat(action.message)  // can not use push(), similar to push
        }

        case actionTypes.DELETE_ALL_MESSAGES_SUCCESS:
        return{
            ...state,
            messages: []
        }

        case actionTypes.DELETE_MESSAGE:
            let newMessages = state.messages.slice();
            newMessages.spice(action.index,1)
            return{
                ...state,
                messages: newMessages
            }

        case actionTypes.SHOW_DETAIL:
        return{
            ...state,
            detailMessage: action.message,
            detailMessageShown: true
        }
        
        case actionTypes.CLOSE_DETAIL:  
        return{
            ...state,
            detailMessage: '',
            detailMessageShown: false
        }

        default:
            return state;
    }

    
};

export default reducer;


