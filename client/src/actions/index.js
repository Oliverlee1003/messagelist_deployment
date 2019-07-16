import * as actionTypes from '../actions/actions'

// const messageAPI = 'http://localhost:9000/messages';
const messageAPI = '/messages'

export const showDetail = message => ({
    type: actionTypes.SHOW_DETAIL,
    message
})

export const closeDetail = message => ({
    type: actionTypes.CLOSE_DETAIL,
    message
})

/////// example starts:
// export const fetchData = (data) => {
//     return {
//         type: actionTypes.FETCH_GITHUB_DATA,
//         data
//     }
// };

// export const fetchGithubData = () => {
//     return (dispatch) => {
//         return axios.get(messageAPI)
//         .then(response => {
//             console.log("data fetched: " + response.data)
//             dispatch(fetchData(response.data))
//         })
//         .catch(error => {
//             throw(error);
//         });
//     };
// };
/////// example ends:


export const addMessage = message => {
    return dispatch => {
        fetch(messageAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({message} ),
            
        })
        .then(res => res.json()) // Returns a promise, and json() returns the body as a JSON-parsed object
        .then(
            data => dispatch(addMessageSuccess(data)), 
            )
            .catch(err => console.error(err)) 
        }
    };
    
    const addMessageSuccess = message => {
        return {
            type: 'ADD_MESSAGE_SUCCESS',
            message: message.message,
        };
    };
     
    const getAllMessagesSuccess = (response) => {
        return {
            type: actionTypes.GET_ALL_MESSAGES_SUCCESS,
            response,
        };
    };
    
    export const getAllMessages = () => {
        return dispatch => {
            fetch(messageAPI)
            .then(res => res.json()) // Returns a promise, and json() returns the body as a JSON-parsed object
            .then(
                data => dispatch(getAllMessagesSuccess(data)), 
                )
                .catch(err => console.error(err))  // if error, console log error to debug
            }
        };
        
        
        export const deleteAllMessagesSuccess = data => {
            return {
                type: actionTypes.DELETE_ALL_MESSAGES_SUCCESS,
                deletedEntries: data,
            };
        };
        
        export const deleteAllMessages = () => {
            return dispatch => {
                fetch(messageAPI, {
                    method: 'DELETE',
                })
                .then(res => res.json()) 
                .then(
                    data => dispatch(deleteAllMessagesSuccess(data)),
                    )
                .catch(err => console.error(err)) 
                }
                
            };
            
            const deleteMessageSuccess = (data, index) => {
                return {
                    type: actionTypes.DELETE_MESSAGE_SUCCESS,
                    deletedEntry: data,
                    index,
                };
            };
            
            export const deleteMessage = index => {
                const messageAPIIndex = messageAPI + "/" + index
                return dispatch => {
                    fetch(messageAPIIndex, {
                    method: 'DELETE',
                })
                .then(res => res.json()) // Returns a promise
                .then(
                    data => dispatch(deleteMessageSuccess(data, index)),
                    )
                    .catch(err => console.error(err)) 
                }
            };
            
            
            
            
            
            