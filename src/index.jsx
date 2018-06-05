import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../semantic-theme/semantic.less';
import App from './App.jsx';

require( '../styles/application.scss' );

ReactDOM.render( <Router><App /></Router>, document.getElementById( 'react-root' ) );
