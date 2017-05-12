import React from 'react';
import { Link } from 'react-router';

import './App.scss';

const App = React.createClass({

    render:function(){
        return(
           <div className="app">
               <nav>
                   <Link className="link" to='/about'>About</Link>
                   <Link className="link" to='/inbox'>Inbox</Link>
               </nav>
               <div className="content">
                   {this.props.children}
               </div>
           </div>
        )
    }
});

export default App;

