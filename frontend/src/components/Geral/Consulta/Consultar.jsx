import React from 'react'
import MediaHandler from '../../../services/MediaHandler'
import './Consulta.css'
import Peer from 'simple-peer'

export default class Consultar extends React.Component {

    constructor(props)
    {
        super(props);
       
    }

    

    render(){
        return(
            <React.Fragment>
                <div className="container consultaVideo">
                    
                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <div className="video-container">
                                <video className="meu_video"></video>
                                <video className="video_usuario" ></video>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }


}