



import React, { useContext, useRef, useEffect } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
    const { stream, me, myVideo, userVideo, answerCall, call, callAccepted, callEnded, leaveCall, setName } = useContext(SocketContext);
    const myVideoRef = useRef(null); // Create a new ref for myVideo

    useEffect(() => {
        if (stream) {
            myVideoRef.current.srcObject = stream; // Set srcObject when stream is available
        }
    }, [stream]);

    return (
 
        <Grid container sx={{ justifyContent: 'center' }}>
            {stream && (
                <Paper sx={{ padding: '10px', border: '2px solid black', margin: '10px' }}>
                    <Grid item xs={10} md={6}>
                        <Typography variant='h5' gutterBottom>{call.name || 'Name'}</Typography>
                        <video playsInline ref={myVideoRef} autoPlay muted sx={{ width: '350px', '@media (max-width:600px)': { width: '300px' } }}></video>
                    </Grid>
                </Paper>
            )}
            {callAccepted && !callEnded && (
                <Paper sx={{ padding: '10px', border: '2px solid black', margin: '10px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h5' gutterBottom>{call.name || 'Caller'}</Typography>
                        <video playsInline ref={userVideo} autoPlay sx={{ width: '550px', '@media (max-width:600px)': { width: '300px' } }}></video>
                    </Grid>
                </Paper>
            )}
        </Grid>
    );
}

export default VideoPlayer;





