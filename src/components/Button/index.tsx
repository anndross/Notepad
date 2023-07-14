import { ComponentPropsWithoutRef } from "react"

type Props = ComponentPropsWithoutRef<'button'> & {
  css?: string
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className='p-1 flex justify-center items-center shadow-md active:shadow ease-in duration-75 w-full rounded-md bg-gray-800 hover:bg-gray-700 active:bg-gray-600 text-white border-none'
      {...props}
    >
      {children}
    </button>
  )
}