

class RoomList extends Component {

this.roomsRef = this.props.firebase.database().ref('rooms');

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    console.log(snapshot);
  });
}

  render() {
    return(
      this.state = {
        rooms: []
      };
    )
  }
}
