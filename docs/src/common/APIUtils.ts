class APIUtils {
  // api functions
  public static async requestCreateLobby(uid: string, gameType: string) {
    // create request
    const createLobbyRequest = {
      userId: uid,
      gameType: gameType,
    };

    console.log('create API Utils call');
    // send request
    const createLobbyResponse = await this.putRequest(
      'https://us-central1-cloudboardgames.cloudfunctions.net/createNewLobby',
      createLobbyRequest
    );
    return createLobbyResponse;
  }
  public static async requestJoinLobby(uid: string, roomCode: string) {
    // create request
    const joinLobbyRequest = {
      userId: uid,
      lobbyCode: roomCode,
    };

    // send request
    const joinLobbyResponse = await this.putRequest(
      'https://us-central1-cloudboardgames.cloudfunctions.net/joinLobby',
      joinLobbyRequest
    );
    return joinLobbyResponse;
  }
  private static async putRequest(url: string, request: any): Promise<any> {
    console.log('create putRequest call on url: ' + url);

    // / Default options are marked with *
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';

    const response = await fetch(proxyurl + url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .catch(() =>
        console.log('Can’t access ' + url + ' response. Blocked by browser?')
      );
    return response; // parses JSON response into native JavaScript objects
  }
}
export default APIUtils;
