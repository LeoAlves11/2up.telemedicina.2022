import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {v4} from 'uuid';
import AuthMedicos from '../../../services/AuthMedicos';
import io from "socket.io-client";
import socket from '../../../socket';
import ACTIONS from '../../../socket/actions';

export default function Consultas(props){
    
    const navigate = useNavigate();
    const [rooms, updateRooms] = useState([]);

    const rootNode = useRef();

    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []} = {}) => {
            updateRooms(rooms);
        });
    }, []);

    function getMedicosDisponiveis() {

    }

    return(
        <div className="container">
            <div className="row py-5">
                <div className="col-12 text-center">
                    <div className="divConsultas">
                        <small>Atualize a página para recarregar as consultas disponíveis</small>
                        <h1>Médicos disponíveis para consulta</h1>
                        Consultas
                        <ul>
                            {rooms.map(roomID => (
                                <li key={roomID}>
                                    {roomID}
                                    <button onClick={() =>{
                                        navigate(`/consultas/sala/${roomID}`);
                                    }}>Entrar na sala</button>
                                </li> 
                            ))}
                        </ul>

                        <button onClick={() => {
                            navigate(`/consultas/sala/${v4()}`);
                        }}>Nova consulta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}