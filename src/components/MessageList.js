import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props)

    this.messagesRef = this.props.firebase.database().ref('messages');

    this.state = {
      messages: []
    };
  }


componentDidMount() {
  this.messagesRef.on('child_added', snapshot => {
    console.log(snapshot);
    const message = snapshot.val();
    message.key = snapshot.key;
    this.setState({messages: this.state.messages.concat(message)})
  });
}

  render() {
    return(
      <section className="messageField">
      {
        this.state.messages.map((message) =>
        <div onClick={()=>this.props.setActiveMessage(message.key)}>
          <ol>
            {message}
          </ol>
        </div>
      )}
      </section>
    );
  }
}

export default MessageList;
