"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function ToastSimple() {
  const { toast } = useToast()

  return (
    <div className="text-black fs-1 fw-bold">
    <Button
      onClick={() => {
        toast({
          variant: "destructive",
          description: "Your message has beenfgadsfsfahgfhsdfhdshsdhfdhd sent.",
        })
      }}
    >
      Show Toast
    </Button>
    </div>
  )
}


