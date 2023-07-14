import { FolderContext } from "@/app/context";
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form"
import { AiOutlinePlus } from "react-icons/ai";
import * as yup from "yup";
import { v4 as uuid } from 'uuid'
const schema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
})

export const CreateFolder = () => {
  const { folderData, setFolderData } = useContext(FolderContext)

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const SetNewTask = (values: any) => {
    const folder = {
      name: values.name,
      date: new Date(),
      id: uuid(),
      content: ''
    }
    axios.post('/api/set-folder', { folder: folder })
      .then((data) => {
        setFolderData([data.data.folder, ...folderData])
      })
  }

  return (
    <div className='w-full'>
      <h1>
        Adicionar nova task
      </h1>
      <div className={`my-5 h-10 gap-2 ${errors.name?.message && 'mb-8'}`}>
        <div className="h-8">
          <Controller
            name='name'
            defaultValue=''
            control={control}
            render={({ field }) =>
              <Input
                type='text'
                {...field}
                error={errors.name?.message ? true : false}
                placeholder='Nome'
              />
            }
          />
          <span className="text-red-600 text-sm">
            {errors.name?.message}
          </span>
        </div>
      </div>
      <div className='w-full '>
        <Button
          onClick={handleSubmit(SetNewTask)}
        >
          <div className="p-2 flex items-center gap-3">
            <AiOutlinePlus />
            criar nova task
          </div>
        </Button>
      </div>
    </div>
  )
}