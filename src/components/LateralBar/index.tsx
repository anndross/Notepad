"use client";
import { Title } from './components/Title';
import { Folders } from './components/List';
import { Actions } from './components/Actions';

export const LateralBar = () => {

  return (
    <div className={`bg-zinc-100 flex flex-col shadow-inner p-4 h-full w-full rounded-xl ease-in duration-150`}>
      <Title />
      <Actions />
      <hr className='my-4 border border-gray-200' />
      <Folders />
    </div>
  )
}