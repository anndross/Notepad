import { FolderContext } from "@/app/context";
import { DropDown } from "@/components/DropDown"
import { useContext } from "react";


export const Filters = () => {
  const { folderData, setFolderData } = useContext(FolderContext)

  const sortByLatest = () => {
    const newFolderData = [...folderData]


    const sortedFolder = newFolderData.sort(function (a, b) { return Number(new Date(b.date)) - Number(new Date(a.date)) });

    setFolderData(sortedFolder)
  }

  const sortByOldest = () => {
    const newFolderData = [...folderData]

    const sortedFolder = newFolderData.sort(function (a, b) { return Number(new Date(a.date)) - Number(new Date(b.date)) });

    setFolderData(sortedFolder)
  }


  return (
    <div className='w-full gap-2 items-center grid grid-cols-[calc(60%-0.5rem)_minmax(40%,_1fr)]'>
      <span>Lista de afazeres</span>
      <DropDown>
        <button onClick={sortByLatest}>Mais recente</button>
        <button onClick={sortByOldest}>Mais antigo</button>
      </DropDown>
    </div>
  )
}