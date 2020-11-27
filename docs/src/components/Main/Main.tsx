import React, { Component } from 'react';
import firebase from 'firebase';
import FireBaseConfig from '../../config/firebase.config.json'
import AppMenuBar from '../AppMenuBar/AppMenuBar';
import Lobbies from '../Lobbies/Lobbies';
import CurrentUser from '../../common/CurrentUser';
import Prompts from '../Prompts/Prompts';

// Configure Firebase.
var config = FireBaseConfig;
var app = firebase.initializeApp(config);
var db = firebase.database(app);

class Main extends Component<any, { userId: string, lobbyAccessToken: string | null, gameData: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      userId: '',
      gameData: null,
      lobbyAccessToken: null
    }
    this.setUserId = this.setUserId.bind(this);
    this.setLobbyAccessToken = this.setLobbyAccessToken.bind(this);
  }

  public render() {
    var content = null;
    if (this.state.lobbyAccessToken == null) {
      content = (<Lobbies db={db} userId={this.state.userId} setLobbyAccessToken={this.setLobbyAccessToken} setUserId={this.setUserId}></Lobbies>);
    }
    else {
      content = (<Prompts db={db} userId={this.state.userId} accessToken={this.state.lobbyAccessToken}></Prompts>);
    }
    return <div>
      <AppMenuBar></AppMenuBar>
      <div className="mainContent">
        {content}
      </div>
    </div>;
  }

  public setUserId(newUserId: string) {
    this.setState({ userId: newUserId });
  }
  public setLobbyAccessToken(newToken: string) {
    this.setState({ lobbyAccessToken: newToken });
  }

}

export default Main;
