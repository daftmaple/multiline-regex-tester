import React from 'react';
import {
  Theme,
  WithStyles,
  createStyles,
  withStyles,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from '@material-ui/core';

const styles = (theme: Theme) => createStyles({});

interface IProps extends WithStyles<typeof styles> {}

const Main = (props: IProps) => {
  const [inputValue, setInputValue] = React.useState('');
  const [testValue, setTestValue] = React.useState('');
  const [regexVariant, setRegexVariant] = React.useState({
    i: true,
    g: true,
    m: true,
  });
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegexVariant({
      ...regexVariant,
      [event.target.name]: event.target.checked,
    });
  };

  const checkRegexes = () => {
    const t = inputValue.split('\n');
    const preset = Object.keys(regexVariant)
      .filter((k) => Object.create(regexVariant)[k])
      .join('');
    for (let i = 0; i < t.length; i++) {
      const pattern = t[i];
      if (pattern.length === 0) continue;
      const re = new RegExp(pattern.replace(/(\r\n|\n|\r)/gim, ''), preset);
      if (re.test(testValue)) {
        setMatchingPattern(pattern);
        return;
      }
    }
    setMatchingPattern('No matching pattern');
  };

  const saveToFile = () => {
    const e = document.createElement('a');
    const f = new Blob([inputValue], { type: 'text/plain' });
    e.href = URL.createObjectURL(f);
    e.download = 'regexes.txt';
    e.click();
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
          variant="outlined"
          color="primary"
          value={inputValue}
          onChange={(input) => setInputValue(input.target.value)}
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        />
        <Button variant="contained" color="primary" component="label">
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
        <Button variant="contained" onClick={() => saveToFile()}>
          Save into file
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
          label="Input text"
          multiline
          fullWidth
          rows={8}
          variant="outlined"
          color="primary"
          value={testValue}
          onChange={(input) => setTestValue(input.target.value)}
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <div
          style={{
            width: '100%',
            margin: '4px',
          }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={regexVariant.i}
                onChange={handleChange}
                color="primary"
                name="i"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Insensitive (i)"
          />
          <FormControlLabel
            control={
              <Switch
                checked={regexVariant.g}
                onChange={handleChange}
                color="primary"
                name="g"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Global (g)"
          />
          <FormControlLabel
            control={
              <Switch
                checked={regexVariant.m}
                onChange={handleChange}
                color="primary"
                name="m"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Multi line (m)"
          />

          <Button
            variant="contained"
            color="primary"
            onClick={() => checkRegexes()}
          >
            Test regex
          </Button>
        </div>
        <div style={{ marginTop: '12px' }}>
          <TextField
            id="outlined-disabled"
            label="Matching pattern"
            value={matchingPattern}
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Main);
