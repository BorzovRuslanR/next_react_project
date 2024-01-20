'use client'

import { MenuIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'


export default function MainMenuButton() {
  return (
    <div>
        <Button variant={'ghost'} size={'icon'}>
            <MenuIcon />
        </Button>
    </div>
  )
}
