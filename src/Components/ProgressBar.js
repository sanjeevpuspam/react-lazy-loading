import React from 'react';
import { Grid,LinearProgress, styled, Paper } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ProgressBar = () => {
  return <><Grid item xs={12}><Item><LinearProgress /></Item></Grid></>;
}

export default ProgressBar;
