'use client'

import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import store from '@/store/store'
import { ThemeProvider } from '@/components/ThemeProvider'

export default function Providers({ children }: PropsWithChildren) {
    return (
        <Provider store={store}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </Provider>
    )
}