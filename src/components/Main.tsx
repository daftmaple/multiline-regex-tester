import React from 'react';
import {
  Theme,
  WithStyles,
  createStyles,
  withStyles,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

const styles = (theme: Theme) => createStyles({});

interface IProps extends WithStyles<typeof styles> { }

const Main: React.FC<IProps> = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [testValue, setTestValue] = React.useState('');

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'inline-block',
        clear: 'both',
        paddingTop: '75px',
        border: 0,
      }}
    >
      <div
        style={{
          width: '48%',
          float: 'left',
          position: 'relative',
          padding: '1%',
        }}
      >
        <Typography variant="h5">List of regexes</Typography>

        <TextField
          id="filled-multiline-static"
          label="Input regex"
          multiline
          fullWidth
          rows={12}
          // defaultValue="Forbidden regexes monkaS"
          variant="outlined"
          color="primary"
          value={inputValue}
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <Button variant="contained" component="label">
          Upload regex file
          <input type="file" accept="text/plain" style={{ display: 'none' }} />
        </Button>
      </div>
      <div
        style={{
          width: '48%',
          float: 'left',
          position: 'relative',
          padding: '1%',
        }}
      >
        <Typography variant="h5">Test input</Typography>

        <TextField
          id="filled-multiline-static"
          label="Input regex"
          multiline
          fullWidth
          rows={8}
          // defaultValue="Forbidden word monkaS"
          variant="outlined"
          color="primary"
          value={testValue}
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <Button variant="contained" color="primary">
          Check validity
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(Main);
