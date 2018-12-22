import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props);

  this.usernameRef = this.props.firebase.database().ref('username');

  const provider = new firebase.auth.GoogleAuthProvider();

}

componentDidMount() {
  this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user);
  });
}

  render() {
    return(
      <div onClick={()=>this.props.setUser(this.username)}>
        {
          this.props.user.username
        }
        <input type='button' value='click'
         onClick={this.props.firebase.auth().signInWithPopup(provider)}>
          Sign In
        </input>
        <br />
        <input type='button' value='click' onClick={this.props.firebase.auth().signOut()}>
          Sign Out
        </input>
      </div>
    )
  }
}

export default User;
