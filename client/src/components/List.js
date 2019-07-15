import React from 'react';
import {connect} from 'react-redux';
import '../App.css';
import * as allActions from '../actions/index'



class List extends React.Component {

    componentDidMount() {
        this.props.getAllMessages();
      }
    
    render() {
        return (
            <div>
            <ul>
            {this.props.listOfMessages.map((message,index) => (
                <li key={index}>
                <button className = "messageButton" onClick={() => this.props.showDetail(message.message)}>{message.message}</button>
                <button  onClick={() => this.props.deleteMessage(message.message)}> delete</button>
    
                </li>))}
                </ul>         
                </div>);
            }
        }
const mapStateToProps = (state) => {
            return {
                listOfMessages: state.messages
            }; //now it will appear as props
};


const mapDispatchToprops = dispatch => {
    return {
        getAllMessages: () => dispatch(allActions.getAllMessages()),
        showDetail: (msg) => dispatch(allActions.showDetail(msg)),
        deleteMessage:(msg) => {
                            dispatch(allActions.deleteMessage(msg))
                            window.location.reload();}
    }
}
        
        
export default connect(mapStateToProps, mapDispatchToprops)(List);
        