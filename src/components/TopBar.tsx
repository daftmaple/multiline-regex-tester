import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  IconButton,
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Tooltip,
} from '@material-ui/core';
import React from 'react';
import GitHubIcon from '../icons/GitHubIcon';

const styles = (theme: Theme) => createStyles({});

interface IProps extends WithStyles<typeof styles> {
  children: React.ReactNode;
}

const TopBar = (props: IProps) => {
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar color="inherit">
        <Grid
          container
          spacing={1}
          justify="space-between"
          alignItems="center"
          direction="row"
        >
          <Grid item>
            <Typography color="textPrimary" variant="h5">
              ECMAScript multiline regex tester
            </Typography>
          </Grid>
          <Grid item>
            {/* Takes the dark theme toggle here */}
            {props.children}
            <Tooltip title="GitHub repository">
              <IconButton
                target="_blank"
                href="https://github.com/daftmaple/multiline-regex-tester"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TopBar);
