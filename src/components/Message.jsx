import React from 'react';
import message from '../messages.json';

import './Message.scss';

const Message = React.createClass({
    getInitialState(){
          const {messageId} = this.props.params;
          return {
              message: message.find(message => message.id === messageId)
          }
    },
    componentWillReceiveProps(nextProps){
        const { messageId: prevId} = this.props.params;
        const { messageId: nextId} = nextProps.params;

        if(prevId !== nextId){
            this.setState({
                message: message.find(message => message.id === nextId)
            })
        }
    },
    render(){
        const { message } = this.state;
        return(
            <div className="message">
                <p>From : {message.senderName} ({message.senderEmail})</p>
                <p>To: you</p>
                <p>Subject: {message.subject}</p>
                <hr/>
                <p>{message.body}</p>
            </div>
        )
    }
});

export default Message;

