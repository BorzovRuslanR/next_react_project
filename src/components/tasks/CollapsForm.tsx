"use client"
 
import * as React from "react"
import { ChevronsUpDown, Plus, X } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import './collapseForm.css'
 
export function CollapsForm({children}: React.PropsWithChildren) {
  const [isOpen, setIsOpen] = React.useState(false)
 
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2 py-4"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          Collaps form
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      
      <CollapsibleContent className="space-y-2 CollapsibleContent px-2">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}