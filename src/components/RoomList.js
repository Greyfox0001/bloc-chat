import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);

    this.roomsRef = this.props.firebase.database().ref('rooms');

    this.state = {
      rooms: [],
    };
  }

  handleNewRoom(e) {
    this.setState({newRoomName: e.target.value})
  }

  newRoomSubmit(e) {
    e.preventDefault();
    const newRoom = {name: this.state.newRoomName};
    this.roomsRef.push({rooms: [...this.state.rooms, newRoom], newRoomName: ''});
  }

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
      this.state.rooms.map((rooms) =>
        <div>
          {rooms.name};
        </div>
    )}
    </div>
    </section>
  );
 }
}

export default RoomList;
