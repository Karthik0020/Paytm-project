"use client"

import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  onclick: () => void
}

export const Button = ({ onclick , children }: ButtonProps) => {
  return (
    <button onClick={onclick} type="button" className=""> 
      {children}
    </button>
  )
}