import React, { Component } from 'react';
import firebase from 'firebase/app';
import FireBaseConfig from '../../config/firebase.config.json'
import Login from '../Login/Login';
import AppMenuBar from '../AppMenuBar/AppMenuBar';
import Lobbies from '../Lobbies/Lobbies';
import CurrentUser from '../../common/CurrentUser';
import Prompts from '../Prompts/Prompts';

// Configure Firebase.
var config = FireBaseConfig;
var app = firebase.initializeApp(config);
var db = firebase.database(app);

class Main extends Component<any, { currentUser: CurrentUser | null, lobbyAccessToken: string | null, gameData: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentUser: null,
      gameData: null,
      lobbyAccessToken: null
    }
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.setLobbyAccessToken = this.setLobbyAccessToken.bind(this);
  }

  public render() {
    var content = null;
    if (this.state.currentUser == null) {
      content = (<Login onLogin={this.onLogin} />);
    }
    else {
      if (this.state.lobbyAccessToken == null) {
        content = (<Lobbies db={db} userId={this.state.currentUser.uid} setLobbyAccessToken={this.setLobbyAccessToken}></Lobbies>);
      }
      else {
        content = (<Prompts db={db} userId={this.state.currentUser.uid} accessToken={this.state.lobbyAccessToken}></Prompts>);
      }
    }
    return <div>
      <AppMenuBar onLogout={this.onLogout}></AppMenuBar>
      <div className="mainContent">
        {content}
      </div>
    </div>;
  }

  public onLogin(currentUser: any) {
    this.setState({ currentUser: currentUser });
  }
  public onLogout() {
    firebase.auth().signOut();
    this.setState({ currentUser: null })
  }
  public setLobbyAccessToken(newToken: string) {
    this.setState({ lobbyAccessToken: newToken });
  }

}

export default Main;
