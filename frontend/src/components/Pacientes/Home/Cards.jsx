import React from 'react';
import Card from 'react-bootstrap/Card';
import * as AiIcons from "react-icons/ai";
import { SCard } from '../../Geral/Layout/Sidebar/Style';

export default function Cards() 
{

    const listCard = [
        {
            key: "card-home-1", //Item unico
            icone: <AiIcons.AiOutlineCalendar />,
            label: "Próxima consulta",
            link: "/historico",
            desc: "",
            bg_color: "#2ecc71",
            label_color: "#ffffff",
            link_desc: "Ver consultas"
        },
        {
            key: "card-home-2", //Item unico
            icone: <AiIcons.AiOutlineClockCircle />,
            label: "Histórico",
            link: "/historico",
            desc: "",
            bg_color: "#3498db",
            label_color: "#ffffff",
            link_desc: "Ver histórico"
        },
    ]

    return(
        <>
        <div className="row">
            {listCard.map(({ key, icone, label, link, desc, bg_color, label_color, link_desc }) => (
                <div className="col-4" key={key}>
                    <SCard> 
                        <Card className='cardsHome' style={{background: 'transparent'}}>
                            <div className='icon-card' style={{background: bg_color, color: label_color}}>
                                { icone }
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center'>  {label} </Card.Title>
                                <Card.Text className='text-center'>
                                { desc }
                                </Card.Text>
                                <Card.Link href="#" className='text-center'>{ link_desc }</Card.Link>
                            </Card.Body>
                        </Card>
                    </SCard>
                </div>
            ))}
        </div>
        </>
    )
}