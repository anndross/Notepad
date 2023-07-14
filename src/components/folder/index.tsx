"use client";
import { useContext, useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { Input } from '../Input';
import { AiFillDelete, AiOutlineEnter } from 'react-icons/ai';
import { FolderContext } from '@/app/context';
import { FolderType } from '@/app/page';
import axios from 'axios';
import { format } from 'date-fns';

type Props = {
  data: FolderType
}

export const Folder = ({ data }: Props) => {
  const { folderData, setFolderData, setSelectedFolder, selectedFolder } = useContext(FolderContext)

  const [canEdit, setCanEdit] = useState(false)
  const [editedName, setEditedName] = useState(data.name)


  const onDelete = async () => {
    const newFolderData = [...folderData]

    const index = newFolderData.indexOf(data)
    await axios.post('api/deleteOne-folder', { id: data.id })
    newFolderData.splice(index, 1)

    setFolderData(newFolderData)
  }

  const onEdit = async () => {
    const newFolderData = [...folderData]

    const folderIndex = newFolderData.indexOf(data)

    axios.post('api/update-folder', {
      id: data.id,
      update: {
        name: editedName
      }
    })
    newFolderData[folderIndex].name = editedName

    setFolderData(newFolderData)
  }

  const isSelectedFolder = data === selectedFolder && 'bg-stone-200'
  return (
    <div
      onSubmit={onEdit}
      onClick={() => setSelectedFolder(data)}
      className={`hover:bg-stone-200 cursor-pointer py-4 px-2 w-full h-4 grid content-center gap-5 grid-cols-[30%_minmax(40%,_1fr)] ${isSelectedFolder}`}
    >
      {canEdit ?
        <Input
          type='text'
          value={editedName}
          onChange={e => setEditedName(e.target.value)}
        /> :
        <span>
          {data.name}
        </span>
      }
      <div className='flex items-center justify-end gap-4'>
        <span>{format(new Date(data.date), 'dd/MM/yyyy')}</span>
        <>
          {
            canEdit ?
              <AiOutlineEnter
                onClick={() => {
                  setCanEdit(!canEdit)
                  onEdit()
                }}
                className='cursor-pointer hover:bg-stone-400 p-[2px] rounded-sm'
                size={24}
              />
              :
              <BiEditAlt
                onClick={() => setCanEdit(!canEdit)}
                className='cursor-pointer hover:bg-stone-400 p-[2px] rounded-sm'
                size={24}
              />
          }
          <AiFillDelete
            onClick={() => {
              onDelete()
            }}
            size={24}
            className='cursor-pointer hover:bg-stone-400 p-[2px] rounded-sm'
          />
        </>
      </div>
    </div>
  )
}