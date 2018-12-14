import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

  var config = {
    apiKey: "AIzaSyA-SsRFiqvnU262WiINuPeapDVRdc6GqdY",
    authDomain: "bloc-chat-19c70.firebaseapp.com",
    databaseURL: "https://bloc-chat-19c70.firebaseio.com",
    projectId: "bloc-chat-19c70",
    storageBucket: "bloc-chat-19c70.appspot.com",
    messagingSenderId: "501787106527"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <h1 id="Bloc Chat">Bloc Chat</h1>
        </header>
        <button>New Room</button>
        <main>
        <div>
        <RoomList firebase={firebase} />
        </div>
        </main>
      </div>
    );
  }
}

export default App;
