import React, { useContext } from 'react'
import { SocketContext } from '../../../socket/SocketContext';
import './Consulta.css';


const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className='row col-videos'>
        {/* Video Usuario 1 */}
        <div className="col-6">
          <p>{name || "Você"}</p>
          <video 
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className='meu_video'
          />
        </div>
        {/* Video Usuario 2 */}
        {callAccepted && !callEnded && (
          <div className="col-6">
            <p>{call.name || "Usuário"}</p>
            <div className="col-6">
              <video 
                playsInline
                ref={userVideo}
                autoPlay
                className='user_video'
              />
            </div>
          </div>
        )}
    </div>
  )
}

export default VideoPlayer