import { ReactNode, useEffect, useRef } from "react"
import { GrClose } from 'react-icons/gr'
import { handleCloseByOutsideClick } from "../utils/handleCloseByOutsideClick"

type Props = {
  children: ReactNode
  showModal: boolean
  setShowModal: (b: boolean) => void
}

export const Modal = ({ children, showModal, setShowModal }: Props) => {
  const ref = useRef(null) as any

  useEffect(() => {
    handleCloseByOutsideClick(ref, setShowModal)
  }, [ref])

  return (
    <>
      {showModal &&
        <div className="absolute z-[1000] h-screen top-0 p-4 left-0 w-screen bg-[#29292984]">
          <div
            ref={ref}
            className="absolute top-28 left-2/4 -translate-x-2/4 h-1/2 w-96 bg-white shadow-inner rounded-md z-50"
          >
            <div className="w-full rounded-t-md flex justify-end p-3">
              <GrClose
                style={{ cursor: 'pointer' }}
                onClick={() => setShowModal(false)}
                size={20}
              />
            </div>
            {children}
          </div>
        </div>
      }
    </>
  )
}