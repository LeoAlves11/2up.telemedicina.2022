// import React, { useState, useRef, useEffect } from 'react';
// import './Consulta.css';
// import { useParams } from 'react-router';
// import MediaHandler from '../../../services/MediaHandler';
// import io from "socket.io-client";
// import Peer from 'simple-peer';
// import useWebRTC, {LOCAL_VIDEO} from '../../../services/useWebRTC';

// function layout(clientsNumber = 1) {
//     const pairs = Array.from({length: clientsNumber})
//       .reduce((acc, next, index, arr) => {
//         if (index % 2 === 0) {
//           acc.push(arr.slice(index, index + 2));
//         }
  
//         return acc;
//       }, []);
  
//     const rowsNumber = pairs.length;
//     const height = `${100 / rowsNumber}%`;
  
//     return pairs.map((row, index, arr) => {
  
//       if (index === arr.length - 1 && row.length === 1) {
//         return [{
//           width: '100%',
//           height,
//         }];
//       }
  
//       return row.map(() => ({
//         width: '50%',
//         height,
//       }));
//     }).flat();
// }

// export default function Sala() {
//     const {id: roomID} = useParams();
//     const {clients, provideMediaRef} = useWebRTC(roomID);
//     const videoLayout = layout(clients.length);

//     return(
//         <React.Fragment>
//         <div className="container">
//             <div className="row py-4">
//                 <div className="col-12 text-center">
//                     <div className="video-container" style={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                     flexWrap: 'wrap',
//                                     height: '100vh',
//                                 }}>
//                         <p>Sala de consulta: </p>
//                         <div className="row">
//                         {clients.map((clientID, index) => {
//                             return (
//                                 <div key={clientID} style={videoLayout[index]}> 
//                                     <video
//                                         width='100%'
//                                         height='100%'
//                                         ref={instance => {
//                                             provideMediaRef(clientID, instance);
//                                         }}
//                                         autoPlay
//                                         playsInline
//                                         muted={clientID === LOCAL_VIDEO}
//                                     />
//                                 </div>
//                             )
//                         })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>  
//         </React.Fragment>
//     )   
// }