import React from 'react';
import {connect} from 'react-redux';
import * as allActions from '../actions/index'

class Detail extends React.Component {
    
    render() {   
        return (
            <div className = "viewDialog">
            {this.props.isDetailOpen && 
                <div>
                <dialog open> 
                <h1>{this.props.detailMessage} </h1> 
                <button onClick = {() => this.props.closeDetail()}>close dialog</button>
                </dialog>
                </div>}
                </div>
                )
            }
        }
        
        const mapStateToProps = (state) => { 
            return {
                detailMessage: state.detailMessage,
                isDetailOpen: state.detailMessageShown
            };
        };
        
        const mapDispatchToprops = dispatch => {
            return {
                closeDetail: () => dispatch(allActions.closeDetail(''))
            }
        }
        
        export default connect(mapStateToProps,mapDispatchToprops)(Detail);
        // connect() is a function which returns a fucntion that return a higher order component
        // connect states needed as props 