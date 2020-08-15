class APIUtils {
  // api functions
  requestCreateLobby(uid: string, gameType: string) {
    // request api
    console.log(
      "send request: create lobby of type " + gameType + " to functions"
    );
    // on resolve receive a room code
    var roomCode = "testLobby";
    // on resolve log in
    return this.requestJoinLobby(uid, roomCode);
  }
  requestJoinLobby(uid: string, roomCode: string) {
    // request api
    console.log(
      "send request: join lobby with roomCode of " + roomCode + " to functions"
    );
    // on response receive an lobby id
    return "testLobby";
  }
}
export default APIUtils;
