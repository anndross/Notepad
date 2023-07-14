import { AiOutlineMenu } from "react-icons/ai"

export const Title = () => {
  return (
    <div className='flex w-6/6 justify-between align-middle'>
      <span className='text-lg font-large'>Menu</span>
      <AiOutlineMenu
        size={30}
      />
    </div>
  )
}