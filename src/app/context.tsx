import { createContext } from "react";
import { FolderType } from "./page";


interface Props {
  folderData: FolderType[]
  setFolderData: (b: FolderType[]) => void
  selectedFolder: FolderType
  setSelectedFolder: (b: FolderType) => void
}


export const FolderContext = createContext<Props>({
  folderData: [],
  setFolderData: (a: FolderType[]) => { },
  selectedFolder: {} as FolderType,
  setSelectedFolder: (a: FolderType) => { },
})