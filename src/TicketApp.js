import React from 'react'
import { SocketProvider } from './context/SocketContext'
import { UIProvider } from './context/UIContext'
import { RouterPage } from './pages/RouterPage'

export const TicketApp = () => {
    return (
        <SocketProvider>
            <UIProvider>
                <RouterPage />
            </UIProvider>
        </SocketProvider>
    )
}
