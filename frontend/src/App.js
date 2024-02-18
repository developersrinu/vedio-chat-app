import React from 'react';
import { Typography, AppBar } from '@mui/material';
import VideoPlayer from './Components/VideoPlayer';
import Notification from './Components/Notification';
import Options from './Components/Options';

const App = () => {
  return (
    <div>
      <AppBar>
        <Typography variant='h3' align='center'>ZOOM APP</Typography>
      </AppBar>
      <VideoPlayer />
      <Options />
      <Notification />
    </div>
  );
}

export default App;











