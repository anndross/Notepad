"use client";
import { Title } from './components/Title';
import { Folders } from './components/List';
import { Actions } from './components/Actions';
import { useState } from 'react';

export const LateralBar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div
      style={{
        left: !openMenu ? 'min(-260px, calc(-40vw + 60px))' : '0',
        width: 'max(300px, 26vw)',
        boxShadow: openMenu ? '0 0 100px 100px #00000046' : 'none'
      }}
      className={`bg-zinc-100 max-[700px]:absolute flex flex-col z-50 shadow-inner p-4 h-full rounded-sm transition-all 1s`}
    >
      <Title openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Actions />
      <div className=''>
        <hr className='my-4 border border-gray-200' />
        <Folders />
      </div>
    </div>
  )
}