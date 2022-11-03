import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {v4} from 'uuid';
import AuthMedicos from '../../../services/AuthMedicos';
import ACTIONS from '../../../socket/actions';

import VideoPlayer from './VideoPlayer';
import Notifications from './Notifications';
import Options from './Options';
import { ContextProvider } from '../../../socket/SocketContext';

export default function Consultas(props){
    
    const navigate = useNavigate();
    const [rooms, updateRooms] = useState([]);

    const rootNode = useRef();

    useEffect(() => {
        async function getMedicosDisponiveis() {
        
        }
    }, []);


    return(
        <ContextProvider>
            <div className="container">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <div className="divConsultas">
                            <h1>Consulta rápida</h1>

                            <VideoPlayer />
                            <Options>
                                <Notifications />
                            </Options>
                            
                            {/* Notificações */}

                            {/* <button onClick={() => {
                                navigate(`/consultas/sala/${v4()}`);
                            }}>Nova consulta</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </ContextProvider>
        
    )
}