import React, { useContext } from 'react'
import { Button } from 'bootstrap';

import { SocketContext } from '../../../socket/SocketContext'

const Notifications = () => {
  
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div className='d-flex justify-content-center align-items-center'>
          <h1>Usuário está ligando: </h1>
          <a href="#" onClick={answerCall}> Aceitar Ligação </a>
        </div>
      )}
    </>
  )
}

export default Notifications