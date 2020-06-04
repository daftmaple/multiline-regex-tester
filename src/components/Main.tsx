import React from 'react';
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({});

interface IProps extends WithStyles<typeof styles> {}

const Main: React.FC<IProps> = () => {
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
        {/* First part */}
      </div>
      <div
        style={{
          width: '48%',
          float: 'left',
          position: 'relative',
          padding: '1%',
        }}
      >
        {/* Second part */}
      </div>
    </div>
  );
};

export default withStyles(styles)(Main);
