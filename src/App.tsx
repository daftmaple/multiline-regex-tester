import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  WithStyles,
  Theme,
  createStyles,
  Grid,
  IconButton,
  TextField,
} from '@material-ui/core';

import GitHubIcon from './icons/GitHubIcon';
import TwitchIcon from './icons/TwitchIcon';
import TwitterIcon from './icons/TwitterIcon';

const styles = (theme: Theme) => createStyles({});

interface IProps extends WithStyles<typeof styles> {}

class DefaultApp extends React.Component<IProps, {}> {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Grid
              container
              spacing={8}
              justify="space-between"
              alignItems="center"
              direction="row"
            >
              <Grid item>
                <Typography variant="h6">Multiline regex tester</Typography>
              </Grid>
              <Grid item>
                <IconButton target="_blank" href="https://github.com/daftmaple">
                  <GitHubIcon />
                </IconButton>

                <IconButton
                  target="_blank"
                  href="https://www.twitch.tv/daftmaple"
                >
                  <TwitchIcon />
                </IconButton>
                <IconButton
                  target="_blank"
                  href="https://twitter.com/daftmaple"
                >
                  <TwitterIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(DefaultApp);
