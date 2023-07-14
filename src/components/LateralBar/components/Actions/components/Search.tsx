"use client";
import { Input } from "@/components/Input"
import { Modal } from "@/components/modal"
import { useContext, useEffect, useState } from "react"
import { FolderContext } from "@/app/context"
import { format } from "date-fns";

export const Search = () => {
  const { folderData, setSelectedFolder } = useContext(FolderContext)

  const [showSearchModal, setShowSearchModal] = useState(false)
  const [researchedData, setResearchedData] = useState(folderData)


  useEffect(() => {
    setResearchedData(folderData)
  }, [showSearchModal])

  const handleSearchFolder = (onChangeValue: string) => {
    const lowercaseValue = onChangeValue.toLowerCase()

    const filteredData = folderData.filter(e => {
      const lowercaseName = e.name.toLocaleLowerCase()

      return lowercaseName.indexOf(lowercaseValue) > -1 ? true : false
    })
    setResearchedData(filteredData)
  }

  return (
    <div className='my-4 h-8'>
      <Input
        onClick={() => setShowSearchModal(true)}
        type='text'
        placeholder='Pesquisar...'
      />
      <Modal
        showModal={showSearchModal}
        setShowModal={setShowSearchModal}
      >
        <div className='px-4 flex flex-col h-[calc(100%-44px)] justify-between'>
          <div className='mb-4 h-8'>
            <Input
              onChange={(e) => {
                handleSearchFolder(e.target.value)
              }}
              type='text'
              placeholder='Pesquisar...'
            />
          </div>
          <ul className='h-full overflow-auto'>
            {researchedData.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setSelectedFolder(item)
                  setShowSearchModal(false)
                }}
                className="flex justify-between mb-5 h-8 w-full cursor-pointer"
              >
                <span>
                  {item.name}
                </span>
                <span>
                  {format(new Date(item.date), 'dd/MM/yyyy')}
                </span>
              </li>
            ))
            }
          </ul>
        </div>
      </Modal>
    </div>
  )
}