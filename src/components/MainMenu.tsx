'use client'

import * as React from "react"
import { LayoutDashboard, User, Image } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { MenuIcon } from "lucide-react"
import Link from "next/link"



export function MainMenu() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={'ghost'} size={'icon'}>
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>New VK 2077</DrawerTitle>
            <DrawerDescription>Next generation social network</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <nav>
              <ul className="flex flex-col gap-3">
                <li>
                  <DrawerClose asChild>
                    <Link href={"/"} className="flex gap-2">
                      <LayoutDashboard />Main page
                    </Link>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Link href={"/profile"} className="flex gap-2">
                      <User />Profile
                    </Link>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Link href={"/photos"} className="flex gap-2">
                      <Image />Photos
                    </Link>
                  </DrawerClose>
                </li>
              </ul>
            </nav>
          </div>
          <DrawerFooter>
            <Button>Login</Button>
            <DrawerClose asChild>
              <Button variant="outline">Sing Up</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
