import React from 'react';
import classaName from 'classname';

import './MessagePreview.scss';

const MessagePreview = React.createClass({
    render(){
        const { title, senderName, selected, onClick } = this.props;
        const classes = classaName('messagePreview', {selected})
        return(
            <div className={classes} onClick={onClick}>
                <div className="title">
                    {title}
                </div>
                <div className="from">
                    {`from ${senderName}`}
                </div>
            </div>
        )
    }
});

export default MessagePreview;

