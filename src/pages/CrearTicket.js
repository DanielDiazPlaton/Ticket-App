import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd'
import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const CrearTicket = () => {

    useHideMenu(true);

     const { socket } = useContext( SocketContext );

     const [ticket, setTicket] = useState(null)

    const nuevoTicket = () => {
        socket.emit('solicitar-ticket', null, (ticket) => {
            setTicket( ticket );
        });
    }

    return (
        <>
            <Row>
                <Col span={ 14 } offset={ 6 } aling="center">
                    <Title level={ 3 }>
                        Presione el boton para un nuevo ticket
                    </Title>

                    <Button
                        type="primary"
                        shape="round"
                        icon={ <DownloadOutlined /> }
                        size="large"
                        onClick={ nuevoTicket }
                    >
                        Nuevo Ticket
                    </Button>

                </Col>
            </Row>

            {
                ticket && (
                    <Row style={{ marginTop: 100 }}>
                        <Col span={ 14 } offset={ 6 } align="center">
                            <Text level={ 2 }>
                                Su número
                            </Text>
                            <br />
                            <Text type="success" style={{ fontSize: 55 }}>
                                { ticket.numero }
                            </Text>
                        </Col>
                    </Row>
                )
            }

        </>
    )
}
