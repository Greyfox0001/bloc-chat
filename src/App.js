import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
        <header>
        <h1 id="Bloc Chat">Bloc Chat</h1>
        </header>
        <main>
        <div>
        {
          this.props.RoomList
        }
        </div>
        </main>
      </div>
    );
  }
}

export default App;
