"use client";
import { Editor } from '@/components/Editor'
import { LateralBar } from '@/components/LateralBar'
import { useEffect, useState } from 'react';
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


  return (
    <FolderContext.Provider value={{ folderData, setFolderData, selectedFolder, setSelectedFolder }}>
      <Head>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className={`h-screen grid grid-cols-[calc(24%-3.5rem)_minmax(76%,_1fr)] grid-rows-1 gap-14 p-5 w-screen`}>
        <LateralBar />
        {folderData.length ?

          <Editor />
          : <NoEditor />
        }
      </div>
    </FolderContext.Provider>

  )
}
