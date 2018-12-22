import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

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
  constructor(props){
    super(props);
    this.state = {
      activeRoom: null,
      user: ''
    }
  }

  setActiveRoom(roomId){
    this.setState({activeRoom: roomId});
  }

  setUser(username){
    this.setState({user: username});
  }


  render() {
    return (
      <div className="App">
        <header>
        <h1 id="Bloc Chat">Bloc Chat</h1>
        </header>
        <User user={this.state.user} setUser={(username)=>this.setUser(username)} firebase={firebase} />
        <main>
        <div>
        <RoomList activeRoom={this.state.activeRoom} setActiveRoom={(room)=>this.setActiveRoom(room)} firebase={firebase} />
        </div>
        <div>
        <MessageList activeRoom={this.state.activeRoom} firebase={firebase} />
        </div>
        </main>
      </div>
    );
  }
}

export default App;
