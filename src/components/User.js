import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props);

  this.usernameRef = this.props.firebase.database().ref('username');

}

componentDidMount() {
  this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user);
  });
}


  render() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    return(
      <div>
        <input type='button' value='Sign In'
         onClick={this.props.firebase.auth().signInWithPopup(provider)}  />
        <br />
        <input type='button' value='Sign Out' onClick={this.props.firebase.auth().signOut()}  />
      </div>
    )
  }
}

export default User;
