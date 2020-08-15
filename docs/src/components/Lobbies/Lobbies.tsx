import React, { Component } from 'react';

import { Button, TextField } from '@material-ui/core';


class Lobbies extends Component<{ db: any, userId: string, setLobbyAccessToken(newToken: string): void }, { roomCode: string, selectedGame: string }> {

  constructor(props: any) {
    super(props);
    this.state = {
      roomCode: '',
      selectedGame: 'Group Voter'
    }

    // state changes
    this.handleRoomCodeChange = this.handleRoomCodeChange.bind(this);
    this.handleSelectedGameChange = this.handleSelectedGameChange.bind(this);

    // buttons
    this.handleJoinLobbyButtonPress = this.handleJoinLobbyButtonPress.bind(this);
    this.handleCreateLobbyButtonPress = this.handleCreateLobbyButtonPress.bind(this);

    // api
    this.createLobby = this.createLobby.bind(this);
    this.joinLobby = this.joinLobby.bind(this);
  }

  public render() {
    return <div>
      <div>
        <h3>Join Lobby</h3>
        <div>
          <TextField variant="outlined" label="Room Code" value={this.state.roomCode} onChange={this.handleRoomCodeChange} />
        </div>
        <br></br>
        <div>
          <Button variant="outlined" onClick={this.handleJoinLobbyButtonPress}>Join</Button>
        </div>
      </div>
      <br></br>
      <div>
        <h3>Create Lobby</h3>
        <div>
          <select name="createLobbyPicker" onChange={this.handleSelectedGameChange}>
            <option value="Group Voter">Group Voter</option>
            <option value="Oh Hell">Oh Hell</option>
          </select>
        </div>
        <br></br>
        <div>
          <Button variant="outlined" onClick={this.handleCreateLobbyButtonPress}>Create</Button>
        </div>
      </div>

    </div >;
  }
  public handleRoomCodeChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    this.setState({ roomCode: event.target.value })
  }
  public handleSelectedGameChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ selectedGame: event.target.value })
  }
  public handleCreateLobbyButtonPress(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.createLobby();
  }
  public handleJoinLobbyButtonPress(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.joinLobby(this.state.roomCode);
  }
  // api functions
  public createLobby() {
    var requestObj = {
      gameType: this.state.selectedGame,
      userId: this.props.userId
    };
    console.log('fake sending createLobby request...');
    console.log(requestObj);

    var responseObj = {
      roomCode: '1234'
    }

    this.joinLobby(responseObj.roomCode);
  }
  public joinLobby(roomCode: string) {
    var requestObj = {
      roomCode: roomCode,
      userId: this.props.userId
    };
    console.log('fake sending joinLobby request...');
    console.log(requestObj);

    var responseObj = {
      accessToken: 'accessGranted'
    }

    // TODO handle error checking such as access denied
    this.props.setLobbyAccessToken(responseObj.accessToken);
  }

}

export default Lobbies;
