
// import { useState,createContext,useRef,useEffect } from "react";
// import {io} from 'socket.io-client'
// import Peer from 'simple-peer'


// const SocketContext = createContext()

// const socket = io('https://vedio-chat.onrender.com/')

// const contextProvider = ({children})=>{

//     const [stream,setStream] = useState(null)
//     const [me,setMe] = useState('')
//     const myVideo = useRef();



//     useEffect(()=>{

//         navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((currentStream)=>{
//             setStream(currentStream)
//             myVideo.current.scrObject = currentStream;

//         })
//         socket.on('me'(id)=>(
//             setMe(id)
//         ))

//     },[])
//     const answerCall = () =>{}

//     const callUser = () =>{}

//     const leaveCall = () =>{}
// }








// import React, { useState, createContext, useRef, useEffect } from "react";
// import { io } from 'socket.io-client'
// import Peer from 'simple-peer'

// const SocketContext = createContext();

// const socket = io('http://localhost:5000');

// const ContextProvider = ({ children }) => {
//     const [stream, setStream] = useState(null);
//     const [me, setMe] = useState('');
//     const [call,setCall] = useState({})
//     const [callaccepted,setCallaccepted] = useState(false)
//     const [callended,setCallended] = useState(false)
//     const [name,setName] = useState('')
//     const myVideo = useRef();
//     const userVideo = useRef();
//     const connectionRef = useRef();

//     useEffect(() => {
//         navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//             .then((currentStream) => {
//                 setStream(currentStream);
//                 myVideo.current.srcObject = currentStream; // Corrected typo "scrObject" to "srcObject"
//             });

//         socket.on('me', (id) => { 
//             setMe(id);
//         });
//         socket.on('calluser',({from, name:callerName,signal})=>(
//             setCall({isReceviedCall:true,from,name:callerName,signal})
//         ))

//     }, []);

//     const answerCall = () => {
//         setCallaccepted(true)
//         const peer = new Peer({initiator:false,trickle:false,stream})
//         peer.on('signal',(data)=>{
//             socket.emit('answercall',{signal:data,to:call.from})
//         })
//         peer.on('stream',(currentStream)=>(
//             userVideo.current.srcObject = currentStream
//         ))
//         peer.signal(call.signal)
//         connectionRef.current.srcObject = peer
//      };
//     const callUser = (id) => { 
//         const peer = new Peer({initiator:true,trickle:false,stream})
//         peer.on('signal',(data)=>{
//             socket.emit('calluser',{callToCall:id,signaData:data,from:me,name})
//         })
//         peer.on('stream',(currentStream)=>(
//             userVideo.current.srcObject = currentStream
//         ))

//         socket.on('callaccepted',(signal)=>{
//             setCallaccepted(true)
//             peer.signal(signal)
//             connectionRef.current.srcObject = peer
//         })
//     };

//     const leaveCall = () => {
//             setCall(true)
//             connectionRef.current.destrory
//             window.location.reload()
//     };

//     return (
//         <SocketContext.Provider value={{ stream, me, myVideo, answerCall, callUser, leaveCall }}>
//             {children}
//         </SocketContext.Provider>
//     );
// }

// export { ContextProvider, SocketContext };




// import { useState, createContext, useRef, useEffect } from "react";
// import { io } from 'socket.io-client';
// import Peer from 'simple-peer';

// const SocketContext = createContext();

// const socket = io('http://localhost:5000');

// const ContextProvider = ({ children }) => {
//     const [stream, setStream] = useState(null);
//     const [me, setMe] = useState('');
//     const [call, setCall] = useState({});
//     const [callAccepted, setCallAccepted] = useState(false);
//     const [callEnded, setCallEnded] = useState(false);
//     const [name, setName] = useState('');
//     const myVideo = useRef();
//     const userVideo = useRef();
//     const connectionRef = useRef();

//     useEffect(() => {
//         navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//             .then((currentStream) => {
//                 setStream(currentStream);
//                 myVideo.current.srcObject = currentStream;
//             });

//         socket.on('me', (id) => {
//             setMe(id);
//         });

//         socket.on('calluser', ({ from, name: callerName, signal }) => {
//             setCall({ isReceivedCall: true, from, name: callerName, signal });
//         });
//     }, []);

//     const answerCall = () => {
//         setCallAccepted(true);
//         const peer = new Peer({ initiator: false, trickle: false, stream });
//         peer.on('signal', (data) => {
//             socket.emit('answercall', { signal: data, to: call.from });
//         });
//         peer.on('stream', (currentStream) => {
//             userVideo.current.srcObject = currentStream;
//         });
//         peer.signal(call.signal);
//         connectionRef.current = peer; // Corrected connectionRef assignment
//     };

//     const callUser = (id) => {
//         const peer = new Peer({ initiator: true, trickle: false, stream });
//         peer.on('signal', (data) => {
//             socket.emit('calluser', { callToCall: id, signalData: data, from: me, name });
//         });
//         peer.on('stream', (currentStream) => {
//             userVideo.current.srcObject = currentStream;
//         });

//         socket.on('callaccepted', (signal) => {
//             setCallAccepted(true);
//             peer.signal(signal);
//             connectionRef.current = peer; // Corrected connectionRef assignment
//         });
//     };

//     const leaveCall = () => {
//         setCallEnded(true);
//         connectionRef.current.destroy(); // Corrected destroy method call
//         window.location.reload();
//     };

//     return (
//         <SocketContext.Provider value={{ stream, me, myVideo, userVideo, answerCall, call, callAccepted, callEnded, callUser, leaveCall, setName }}>
//             {children}
//         </SocketContext.Provider>
//     );
// }

// export { ContextProvider, SocketContext };





























// import React, { useState, createContext, useRef, useEffect } from "react";
// import { io } from 'socket.io-client';
// import Peer from 'simple-peer';

// const SocketContext = createContext();

// const socket = io('https://vedio-chat.onrender.com/');

// const ContextProvider = ({ children }) => {
//     const [stream, setStream] = useState(null);
//     const [me, setMe] = useState('');
//     const [call, setCall] = useState({});
//     const [callAccepted, setCallAccepted] = useState(false);
//     const [callEnded, setCallEnded] = useState(false);
//     const [name, setName] = useState('');
//     const myVideo = useRef();
//     const userVideo = useRef();
//     const connectionRef = useRef();

//     useEffect(() => {
//         navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//             .then((currentStream) => {
//                 setStream(currentStream);
//                 console.log(currentStream)
//                 myVideo.current.srcObject = currentStream;
//               console.log(myVideo.current.srcObject)

//             });

//         socket.on('me', (id) => {
//             setMe(id);
//         });

//         socket.on('calluser', ({ from, name: callerName, signal }) => {
//             setCall({ isReceivedCall: true, from, name: callerName, signal });
//         });
//     }, []);

//     const answerCall = () => {
//         setCallAccepted(true);
//         const peer = new Peer({ initiator: false, trickle: false, stream });
//         peer.on('signal', (data) => {
//             socket.emit('answercall', { signal: data, to: call.from });
//         });
//         peer.on('stream', (currentStream) => {
//             userVideo.current.srcObject = currentStream;
//         });
//         peer.signal(call.signal);
//         connectionRef.current = peer;
//     };

//     const callUser = (id) => {
//         const peer = new Peer({ initiator: true, trickle: false, stream });
//         peer.on('signal', (data) => {
//             socket.emit('calluser', { userToCall: id, signalData: data, from: me, name });
//         });
//         peer.on('stream', (currentStream) => {
//             userVideo.current.srcObject = currentStream;
//         });

//         socket.on('callaccepted', (signal) => {
//             setCallAccepted(true);
//             peer.signal(signal);
//             connectionRef.current = peer;
//         });
//     };

//     const leaveCall = () => {
//         setCallEnded(true);
//         if (connectionRef.current) {
//             connectionRef.current.destroy();
//         }
//         window.location.reload(); // Reload the page after leaving the call
//     };

//     return (
//         <SocketContext.Provider value={{ stream, me, myVideo, userVideo, answerCall, call, callAccepted, callEnded, callUser, leaveCall, setName }}>
//             {children}
//         </SocketContext.Provider>
//     );
// }

// export { ContextProvider, SocketContext };



import React, { useState, createContext, useRef, useEffect } from "react";
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

const socket = io('https://vedio-chat.onrender.com/');

const ContextProvider = ({ children }) => {
    const [stream, setStream] = useState(null);
    const [me, setMe] = useState('');
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState('');
    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((currentStream) => {
                setStream(currentStream);
                myVideo.current.srcObject = currentStream;
            });

        socket.on('me', (id) => {
            setMe(id);
        });

        socket.on('calluser', ({ from, name: callerName, signal }) => {
            setCall({ isReceivedCall: true, from, name: callerName, signal });
        });
    }, []);

    const answerCall = () => {
        setCallAccepted(true);
        const peer = new Peer({ initiator: false, trickle: false, stream });
        peer.on('signal', (data) => {
            socket.emit('answercall', { signal: data, to: call.from });
        });
        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });
        peer.signal(call.signal);
        connectionRef.current = peer;
    };

    const callUser = (id) => {
        const peer = new Peer({ initiator: true, trickle: false, stream });
        peer.on('signal', (data) => {
            socket.emit('calluser', { userToCall: id, signalData: data, from: me, name });
        });
        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        socket.on('callaccepted', (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
            connectionRef.current = peer;
        });
    };

    const leaveCall = () => {
        setCallEnded(true);
        if (connectionRef.current) {
            connectionRef.current.destroy();
        }
        window.location.reload(); // Reload the page after leaving the call
    };

    return (
        <SocketContext.Provider value={{ stream, me, myVideo, userVideo, answerCall, call, callAccepted, callEnded, callUser, leaveCall, setName }}>
            {children}
        </SocketContext.Provider>
    );
}

export { ContextProvider, SocketContext };

