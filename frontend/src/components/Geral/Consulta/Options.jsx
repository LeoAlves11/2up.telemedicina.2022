import React, { useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaPhone } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';

import { SocketContext } from '../../../socket/SocketContext';

const Options = ({ children }) => {

  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className='row'>
      <div className="mt-4 mx-auto w-25">
        <Card>
          <Card.Body>
            <form>
              {callAccepted && !callEnded ? (
                <>
                  <a href="#" onClick={handleShow}>Sair da chamada</a>
                  <Modal show={show} onHide={handleClose} centered>
                    <Modal.Body>Tem certeza que deseja desligar a ligação?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Dispensar
                      </Button>
                      <Button variant="primary" onClick={leaveCall}>
                        Sim, desligar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              ) : (
                <>
                <input type="text" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                <div>{me}</div>
                  <a href="#" onClick={() => callUser(idToCall)}>Ligar</a>
                </>
              )}
            </form>
          </Card.Body>
        </Card>
      </div>
      <div className="mx-auto">
      { children }
      </div>
    </div>
    
  )
}

export default Options