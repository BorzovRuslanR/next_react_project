import React from 'react'
import { MenuIcon, UserIcon } from 'lucide-react'
import { ModeToggle } from './ModToggle'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import MainMenuButton from './MainMenuButton'
import { MainMenu } from './MainMenu'

export default function Appbar() {
  console.log('server component');
  
  return (
    <header className='flex justify-between items-center border-t sm:border-b border-border sm:shadow-md sm:shadow-primary max-sm:shadow-[0px_-20px_80px_5px_#3182ce] w-full px-4 py-3 fixed bottom-0 left-0 right-0 sm:static'>
      <MainMenu/>
      <div className='flex items-center gap-8'>
        <ModeToggle />
        <span>
          User 1
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size={'icon'} variant={'ghost'}>
              <UserIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href={'/profile'}>Profile</Link> 
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/info'}>Info</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
