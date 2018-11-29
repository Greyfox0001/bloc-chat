import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

//<script src="https://www.gstatic.com/firebasejs/5.5.9/firebase.js"></script>
//<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA-SsRFiqvnU262WiINuPeapDVRdc6GqdY",
    authDomain: "bloc-chat-19c70.firebaseapp.com",
    databaseURL: "https://bloc-chat-19c70.firebaseio.com",
    projectId: "bloc-chat-19c70",
    storageBucket: "bloc-chat-19c70.appspot.com",
    messagingSenderId: "501787106527"
  };
  firebase.initializeApp(config);
//</script>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
