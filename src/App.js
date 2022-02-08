import { lazy, Suspense } from 'react';
import { Container, Grid, Box } from '@mui/material';

import ProgressBar from './Components/ProgressBar';
const ApiData = lazy(()=> import('./Components/ApiData'))

const App = () => {
  return (
    <div className="App">
      <Container >
          <Box sx={{ bgcolor: '#cfe8fc' }}>
            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Suspense fallback={<ProgressBar/>}>
                <ApiData />
            </Suspense>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
