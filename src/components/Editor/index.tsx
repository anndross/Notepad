"use client";
import JoditEditor from "jodit-react";
import { useContext, useEffect, useRef, useState } from "react";
import { FolderContext } from "@/app/context";
import axios from "axios";

export const Editor = () => {
  const editorRef = useRef(null)
  const { folderData, setFolderData, selectedFolder } = useContext(FolderContext)

  const [content, setContent] = useState('')


  useEffect(() => {
    setContent(selectedFolder?.content)
  }, [selectedFolder])


  const handleSaveContent = (content: string) => {
    axios.post('api/update-folder', {
      id: selectedFolder.id,
      update: {
        content: content
      }
    })
      .then(() => {
        const index = folderData.indexOf(selectedFolder)

        folderData[index].content = content

        setFolderData(folderData)
      })
  }

  const config = {
    readonly: false,
    height: '100%',
    width: '100%',
  }

  return (
    <JoditEditor
      ref={editorRef}
      value={content}
      config={config}
      onBlur={(e) => {
        handleSaveContent(e)
      }}
    />
  )
}
