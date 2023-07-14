import { ComponentPropsWithoutRef } from "react"

type Props = ComponentPropsWithoutRef<'input'> & {
  error?: boolean
}

export const Input = ({ error, ...props }: Props) => {
  const errorCSS = error && 'border-red-600 placeholder:text-red-800'

  return (
    <input
      className={`rounded-md w-full h-full outline-none text-xs indent-2 bg-transparent border border-gray-300 ${errorCSS}`}
      {...props}
    />
  )
}