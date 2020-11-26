import React, { Component } from 'react';

import { Button, TextField } from '@material-ui/core';
import APIUtils from '../../common/APIUtils';


class Lobbies extends Component<{ db: any, userId: string, setLobbyAccessToken(newToken: string): void }, { roomCode: string, selectedGame: string }> {

  constructor(props: any) {
    super(props);
    this.state = {
      roomCode: '',
      selectedGame: 'COLEBOXGAMES'
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
            <option value="COLEBOXGAMES">Cole Box Games</option>
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
  public async createLobby() {
    const createLobbyResponse = await APIUtils.requestCreateLobby(this.props.userId, this.state.selectedGame);

    if (createLobbyResponse.success) {
      await this.joinLobby(createLobbyResponse.data.lobbyCode);
    } else {
      console.log(createLobbyResponse.message);
    }
  }
  public async joinLobby(roomCode: string) {
    const joinLobbyResponse = await APIUtils.requestJoinLobby(this.props.userId, roomCode);
    if (joinLobbyResponse.success) {
      this.props.setLobbyAccessToken(joinLobbyResponse.data.accessToken);
    } else {
      console.log(joinLobbyResponse.message);
    }

  }

}

export default Lobbies;
