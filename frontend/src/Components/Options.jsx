

import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    callUser(idToCall);
  };

  return (
    <Container style={{ width: '600px', margin: '35px 0', padding: 0, }}>
      <Paper elevation={10} style={{ padding: '10px 20px', border: '2px solid black' }}>
        <form style={{ display: 'flex', flexDirection: 'column' }} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container style={{ width: '100%' }}>
            <Grid item xs={12} md={6} style={{ padding: 20 }}>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} variant="outlined" fullWidth />
              <CopyToClipboard text={me} style={{ marginTop: 20 }}>
                <Button variant="contained" color="primary" fullWidth type="submit">
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} style={{ padding: 20 }}>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} variant="outlined" fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" fullWidth onClick={leaveCall} style={{ marginTop: 20 }} type="button">
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" fullWidth style={{ marginTop: 20 }} type="submit" onClick={()=>callUser(idToCall)}>
                  Call
                </Button>
              )}
                
            
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;

