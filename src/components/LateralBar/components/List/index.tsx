import { Folder } from "@/components/folder"
import { Filters } from "./components/Filters";
import { useContext } from "react";
import { FolderContext } from "@/app/context";


export const Folders = () => {
  const { folderData } = useContext(FolderContext)

  return (
    <div>
      <Filters />
      <div className='flex flex-col gap-2 my-6 overflow-y-auto h-full'>
        {folderData.map((item, i) => {

          return (
            <Folder
              key={i}
              data={item}
            />
          )
        })
        }
      </div>
    </div>
  )
}