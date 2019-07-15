import React from 'react';
import {connect} from 'react-redux';
import * as allActions from '../actions/index'


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            localMsg: ""
        }
    }

    handleChange = (event) => {
        this.setState({localMsg: event.target.value});
    };

    handleSubmit = (event) => {
            this.props.addMessage(this.state.localMsg);
            console.log("local msg is : " + this.props.localMsg)
            this.setState({localMsg:""})
        
    };

    render() {

        return (<div className = "row">
                <h2> Message List App</h2>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder = "type your new message here" className = "inputText" value={this.state.msg} onChange={this.handleChange}/>
                    <br></br>
                    <input type="submit" className = "AddNewMessageButton"  value="Add New Message"/>
                </form>
                
                <button className = "AddNewMessageButton" onClick={() => this.props.deleteAllMessages()}>delete All Messages</button>


            </div>
        );
    }
}
const mapDispatchToprops = dispatch => {
    return {
        addMessage: (msg) => dispatch(allActions.addMessage(msg)),
        deleteAllMessages: () => {
                                    dispatch(allActions.deleteAllMessages())
                                    window.location.reload();
                                    }
}
}

export default connect(null, mapDispatchToprops)(Form);
