import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);

    this.roomsRef = this.props.firebase.database().ref('rooms');

    this.state = {
      rooms: [],
      newRoomName: ''
    };
  }

  handleNewRoom(e) {
    this.setState({newRoomName: e.target.value});
  }

  newRoomSubmit(e) {
    //stop form from submitting
    e.preventDefault();
    this.roomsRef.push({name: [this.state.newRoomName]});
    //refresh the form
    this.setState({newRoomName: ''});
  };


componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    //console.log(snapshot);
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({rooms: this.state.rooms.concat(room)})
  });
}

render() {
  return(
    <section className="roomlist">
      <form onSubmit={(e) => this.newRoomSubmit(e)}>
        <input type="text" value={this.state.newRoomName} onChange={(e) => this.handleNewRoom(e)} />
        <input type="submit" />
      </form>
    <div className="chatrooms">
    {
      this.state.rooms.map((room) =>
        <div onClick={()=>this.props.setActiveRoom(room.key)} className={(this.props.activeRoom === room.key) ? 'active' : ''}>
          {room.name}
        </div>
    )}
    </div>
    </section>
  );
 }
}

export default RoomList;
