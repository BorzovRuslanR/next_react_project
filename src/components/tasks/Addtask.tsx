import React from 'react'
import { CollapsForm } from './CollapsForm'
import { Button } from '../ui/button'
import { addTask } from './TasksSlice'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useAppDispatch } from '@/lib/hooks'

export default function Addtask() {

    const dispatch = useAppDispatch()

  return (

    <div>
        <CollapsForm>
            <form className='flex flex-col gap-4' onSubmit={(event) => {
                event.preventDefault()
                const form = event.target
                if(form instanceof HTMLFormElement) {
                const formData = new FormData(form)
                const title = formData.get('title') as string
                const desc = formData.get('desc') as string
                if (!title || !desc) return
                const titleInput = form[0] as HTMLInputElement
                titleInput.value = ''
                const descInput = form.desc as HTMLInputElement
                descInput.value = ''

                dispatch(addTask({
                  title,
                  desc,
                  id: String(Math.random()),
                  completed: false
                }))
              }
              }}>
              <Label htmlFor="title">Title</Label>
              <Input type="text" id='title' name='title'/>
              <Label htmlFor="desc">Description</Label>
              <Input type="text" id='description' name='desc'/>
              <Button type='submit'>Add</Button>
            </form>
        </CollapsForm>
    </div>
  )
}
