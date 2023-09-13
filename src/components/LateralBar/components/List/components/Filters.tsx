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
      <span className="text-gray-900">Lista de afazeres</span>
      <DropDown>
        <button onClick={sortByLatest} className="text-gray-900">Mais recente</button>
        <button onClick={sortByOldest} className="text-gray-900">Mais antigo</button>
      </DropDown>
    </div>
  )
}