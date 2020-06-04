import React from 'react';

import TopBar from './components/TopBar';
import {
  ThemeProvider,
  createMuiTheme,
  Switch,
  Tooltip,
  CssBaseline,
} from '@material-ui/core';
import Tester from './components/Main';

const DefaultApp = () => {
  // Defaults the theme to dark theme
  const [themeBool, setTheme] = React.useState(true);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themeBool ? 'dark' : 'light',
        },
      }),
    [themeBool]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(!themeBool);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Added CssBaseline for body background to be dark */}
      <CssBaseline />
      <React.Fragment>
        <TopBar>
          <Tooltip title="Toggle light/dark mode">
            <Switch
              checked={themeBool}
              onChange={handleChange}
              name="checkedTheme"
              color="primary"
            />
          </Tooltip>
        </TopBar>
        <Tester />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default DefaultApp;
