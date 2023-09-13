"use client";
import { Editor } from '@/components/Editor'
import { LateralBar } from '@/components/LateralBar'
import { LegacyRef, useEffect, useRef, useState } from 'react';
import { FolderContext } from './context';
import axios from 'axios';
import { NoEditor } from '@/components/NoEditor';
import Head from 'next/head';

export type FolderType = {
  name: string;
  date: string;
  readonly id: string
  content: string
}


export default function Home() {
  const [folderData, setFolderData] = useState<FolderType[]>([])

  const [selectedFolder, setSelectedFolder] = useState<FolderType>({} as FolderType)

  useEffect(() => {
    axios.get('/api/get-folders')
      .then((data) => {
        const folders = data.data.map((e: { folder: FolderType }) => (
          e.folder
        ))
        setFolderData(folders)
      })
  }, [])

  useEffect(() => {
    const [firstFolder] = folderData
    setSelectedFolder(firstFolder)
  }, [folderData])

  const ref = useRef(null) as any

  return (
    <FolderContext.Provider value={{ folderData, setFolderData, selectedFolder, setSelectedFolder }}>
      <div className={`h-screen p-4 w-screen`}>
        <div ref={ref} className={`h-full  max-[700px]:pl-16 flex gap-4 w-full relative`}>
          <LateralBar />
          {folderData.length ?
            <Editor height={ref.current?.clientHeight} />
            : <NoEditor />
          }
        </div>
      </div>
    </FolderContext.Provider>

  )
}
