import { AiOutlineMenu } from "react-icons/ai"

interface Props {
  openMenu: boolean
  setOpenMenu: (openMenu: boolean) => void
}
export const Title = ({ openMenu, setOpenMenu }: Props) => {

  return (
    <div className='flex w-6/6 justify-between align-middle'>
      <span className='text-lg font-large text-gray-900'>Menu</span>
      <AiOutlineMenu
        className="min-[700px]:pointer-events-none"
        color="black"
        size={28}
        onClick={() => setOpenMenu(!openMenu)}
      />
    </div>
  )
}