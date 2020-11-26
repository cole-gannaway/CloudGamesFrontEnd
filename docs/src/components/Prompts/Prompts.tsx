import React, { Component } from 'react';



class Prompts extends Component<{ db: any, userId: string, accessToken: string }, { data: any }> {

  constructor(props: any) {
    super(props);

    this.state = {
      data: null
    }
  }

  public componentDidMount() {
    // listen to updates
    const lobbyRef = this.props.db.ref('lobbies/' + this.props.accessToken);
    lobbyRef.on('value', (snapshot: any) => {
      console.log('got an update')
      const data = snapshot.val();
      this.setState({ data: data });
    });

  }
  public render() {

    return <div>
      <div>Got a lobby id of {this.props.accessToken}!</div>
      <div>
        <pre>
          {JSON.stringify(this.state.data, null, 2)}
        </pre>
      </div>

    </div >;
  }

}

export default Prompts;
