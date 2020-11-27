import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Typography, Grid } from '@material-ui/core';

class AppMenuBar extends Component<{}, {}> {
  constructor(props: any) {
    super(props);

  }


  public render() {
    return <div >
      <AppBar position="static">
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Typography variant="h6">Cloud Games</Typography>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>;
  }
}

export default AppMenuBar;
