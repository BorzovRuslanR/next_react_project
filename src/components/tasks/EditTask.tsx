'use client';

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppDispatch } from "@/lib/hooks";
import { Task, editTask } from "./TasksSlice";


type Props = {
    task: Task
}

export function EditTask({task}: Props) {

    const dispatch = useAppDispatch()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-20' variant='secondary'>Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit task</DialogTitle>
          <DialogDescription>
            Make changes to your task.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={event => {
            event.preventDefault()
            const form = event.target
            if(form instanceof HTMLFormElement) {
            const formData = new FormData(form)
            const title = formData.get('title') as string
            const desc = formData.get('desc') as string

            dispatch(editTask({
              title,
              desc,
              id: task.id,
            //   completed: false
            }))
          }
        }}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  defaultValue={task.title}
                  name="title"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="desc" className="text-right">
                  Description
                </Label>
                <Input
                  id="desc"
                  defaultValue={task.desc}
                  name="desc"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
                <DialogClose>
                    <Button type="submit">Save changes</Button>
                </DialogClose>
            </DialogFooter>
        </form>
        
      </DialogContent>
    </Dialog>
  )
}
