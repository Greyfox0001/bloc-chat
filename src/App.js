import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
      activeMessageList: null
    }
  }

  setActiveRoom(roomId){
    this.setState({activeRoom: roomId});
  }

  setActiveMessage(messages, roomId) {
    const activeMessage = messages.roomId;
    this.setState({activeMessageList: activeMessage})
  }


  render() {
    return (
      <div className="App">
        <header>
        <h1 id="Bloc Chat">Bloc Chat</h1>
        </header>
        <main>
        <div>
        <RoomList activeRoom={this.state.activeRoom} setActiveRoom={(room)=>this.setActiveRoom(room)} firebase={firebase} />
        </div>
        <div>
        <MessageList activeRoom={this.props.activeRoom} setActiveRoom={(room)=>this.props.setActiveRoom(room)} firebase={firebase} />
        </div>
        </main>
      </div>
    );
  }
}

export default App;
