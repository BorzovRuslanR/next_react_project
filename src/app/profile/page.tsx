import GoBack from '@/components/GoBack'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function ProfilePage() {
  return (
    <main>
      <h2 className='text-2xl text-center p-8'>ProfilePage</h2>
      <Link href='/' className='inline-flex p-4 bg-primary rounded-md hover:bg-primary/90'>Home</Link>
      <GoBack />
    </main>
  )
}
