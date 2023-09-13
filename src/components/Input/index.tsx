import { ComponentPropsWithoutRef } from "react"
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"

type Props = ComponentPropsWithoutRef<'input'> & {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

export const Input = ({ error, ...props }: Props) => {
  const errorCSS = error && 'border-red-600 placeholder:text-red-800'

  return (
    <>
      <input
        className={`rounded-md text-gray-900 w-full h-full outline-none text-xs indent-2 bg-transparent border border-gray-300 ${errorCSS}`}
        {...props}
      />
      <span className="text-red-600 text-xs">
        {error?.message as string}
      </span>
    </>
  )
}