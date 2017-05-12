import React from 'react';
import message from '../messages.json';
import MessagePreview from '../components/MessagePreview.jsx';


import './InboxPage.scss';

const InboxPage = React.createClass({
    contextTypes:{
      router: React.PropTypes.object.isRequired
    },

    getInitialState(){
      return {
          message
      }
    },

    handlePreviewClick(messageId){
        this.context.router.push(`/inbox/messages/${messageId}`);
    },

    render(){
        var handlePreviewClick = this.handlePreviewClick;
        const { message } = this.state;
        const selectedId = this.props.params.messageId;

        return(
            <div className="inboxPage">
                <div className="messages">
                    {
                       message.map(function(message){
                           return <MessagePreview
                               onClick={handlePreviewClick.bind(null, message.id)}
                               key={message.id}
                               selected={message.id === selectedId}
                               title={message.subject}
                               senderName={message.senderName}
                           >
                           </MessagePreview>
                       })
                    }
                </div>
                <div className="message-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default InboxPage;

