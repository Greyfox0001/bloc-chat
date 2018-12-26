import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props)

    this.messagesRef = this.props.firebase.database().ref('messages');

    this.state = {
      messages: [],
      newMessage: ''
    };
  }

  handleNewMessage(e) {
    this.setState({newMessage: e.target.value});
  }

  newMessageSubmit(e) {
    e.preventDefault();
    this.messagesRef.push({message: [this.state.newMessage]});
    this.setState({newMessage: ''});
  };

componentDidMount() {
  this.messagesRef.on('child_added', snapshot => {
    //console.log(snapshot);
    const message = snapshot.val();
    message.key = snapshot.key;
    this.setState({messages: this.state.messages.concat(message)})
  });
}

  render() {
    return(
      <section className="messageField">
      {
        this.state.messages.filter(
          (message)=> message.roomId == this.props.activeRoom).map((message, index) =>
        <div key={index}>
          <ol>
            {message.content}
          </ol>
        </div>
      )}
      <form onSubmit={(e) => this.newMessageSubmit(e)}>
        <input type="text" value={this.state.newMessage} onChange={(e) => this.handleNewMessage(e)} />
        <input type="submit" />
      </form>
      </section>
    );
  }
}

export default MessageList;
