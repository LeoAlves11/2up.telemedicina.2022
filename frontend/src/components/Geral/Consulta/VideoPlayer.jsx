import React, { useContext } from 'react'
import { SocketContext } from '../../../socket/SocketContext';
import './Consulta.css';


const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className='row col-videos'>
      <div className="col-12">
        {callAccepted && !callEnded && (
          <div className="col-12 mx-auto mt-3">
            <video 
                playsInline
                ref={userVideo}
                autoPlay
                className=''
              />
          </div>
        )}

        {/* Video Usuario 1 */}
        <div className="col-4 mr-auto mt-2">
          <video 
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className='meu_video'
          />
        </div>
        {/* Video Usuario 2 */}
        
      </div>
    </div>
  )
}

export default VideoPlayer