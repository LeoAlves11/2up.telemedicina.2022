import React from 'react'
import MediaHandler from '../../../services/MediaHandler'

export default class ConsultaInst extends React.Component {

    constructor()
    {
        super();
        this.state = {
            hasMedia: false,
            medicoUserID: null,
        }

        this.mediaHandler = new MediaHandler();
    }

    componentDidMount()
    {
        this.mediaHandler.getPermissoes()
            .then((stream) => {
                this.setState({hasMedia: true});

                try {
                    this.video_medico.srcObject = stream;
                } catch (e) {
                    this.video_medico.src = URL.createObjectURL(stream);
                }

                this.video_medico.play();
            })
    }

    render(){
        return(
            <React.Fragment>
                <div className="container consultaVideo">
                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <div className="video-container">
                                <video className="video_medico" ref={(ref) => {this.video_medico = ref;}}></video>
                                <video className="video_paciente" ref={(ref) => {this.video_paciente = ref;}}></video>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }


}