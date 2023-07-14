import { IoMdArrowDropdown } from "react-icons/io"
import { Button } from "../Button"
import React, { ReactNode, useEffect, useRef, useState } from "react"
import { handleCloseByOutsideClick } from "../utils/handleCloseByOutsideClick"

type Props = {
  children: ReactNode
}

export const DropDown = ({ children }: Props) => {
  const [showItems, setShowItems] = useState(false)

  const ref = useRef(null) as any

  useEffect(() => {
    handleCloseByOutsideClick(ref, setShowItems)
  }, [ref])

  return (
    <div
      className="relative"
      ref={ref}
    >
      <Button onClick={() => setShowItems(!showItems)}>
        <div className="flex gap-2 items-center">
          Filtrar por
          <IoMdArrowDropdown />
        </div>
      </Button>
      {showItems &&
        <div className="w-full grid gap-1 content-center justify-center max-h-[200px] overflow-auto p-2 mt-2 rounded-md bg-gray-200 shadow-inner absolute">
          {children}
        </div>
      }
    </div>
  )
}