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

interface IProps extends WithStyles<typeof styles> {}

const Main: React.FC<IProps> = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [testValue, setTestValue] = React.useState('');
  const [matchingPattern, setMatchingPattern] = React.useState('');

  const setInput = (f: File) => {
    const r = new FileReader();
    r.onloadend = () => {
      const i = r.result;
      if (typeof i === 'string') {
        setInputValue(i);
      }
    };
    r.readAsText(f);
  };

  const checkRegexes = () => {
    const t = inputValue.split('\n');
    for (let i = 0; i < t.length; i++) {
      const pattern = t[i];
      if (pattern.length === 0) continue;
      const re = new RegExp(pattern.replace(/(\r\n|\n|\r)/gim, ''), 'igm');
      if (re.test(testValue)) {
        setMatchingPattern(pattern);
        return;
      }
    }
    setMatchingPattern('No matching pattern');
  };

  React.useEffect(() => {}, [matchingPattern]);

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
          onChange={(input) => setInputValue(input.target.value)}
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <Button variant="contained" color="primary">
          Upload regex file
          <input
            type="file"
            accept="text/plain"
            style={{ display: 'none' }}
            onChange={(e) => setInput(e.target.files![0])}
          />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setInputValue('')}
        >
          Clear regexes
        </Button>
        <Button variant="contained">Save into file</Button>
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
          label="Input text"
          multiline
          fullWidth
          rows={8}
          // defaultValue="Forbidden word monkaS"
          variant="outlined"
          color="primary"
          value={testValue}
          onChange={(input) => setTestValue(input.target.value)}
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={() => checkRegexes()}
        >
          Test regex
        </Button>
        <TextField
          id="outlined-disabled"
          label="Matching pattern"
          value={matchingPattern}
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Main);
