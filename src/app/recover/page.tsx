"use client";
import { Input } from '@/components/Input';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import Link from 'next/link';

const RecoverPasswordSchema = yup.object({
  email: yup.string().email('O email é inválido').required('O email é obrigatório'),
  newPassword: yup.string().required('A senha é obrigatória'),
  confirmPassword: yup.string().equals([yup.ref('password')], 'As senhas não coincidem').required('A senha é obrigatória')
})

export default function Recover() {
  const { handleSubmit, control, formState: { errors }, watch } = useForm({
    resolver: yupResolver(RecoverPasswordSchema)
  })

  const onSignIn = (values: { email: string, newPassword: string }) => {
    console.log(values)
  }

  console.log(errors)

  return (

    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Recupere sua senha!
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2 h-9">
              <Controller
                name='email'
                defaultValue=''
                control={control}
                render={({ field }) =>
                  <Input
                    type='text'
                    {...field}
                    error={errors.email}
                    placeholder='email@example.com'
                  />
                }
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Nova Senha
              </label>
            </div>
            <div className="mt-2 h-9">
              <Controller
                name='newPassword'
                defaultValue=''
                control={control}
                render={({ field }) =>
                  <Input
                    type='text'
                    {...field}
                    error={errors.newPassword}
                    placeholder='sua senha...'

                  />
                }
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Confirmar senha
              </label>
            </div>
            <div className="mt-2 h-9">
              <Controller
                name='confirmPassword'
                defaultValue=''
                control={control}
                render={({ field }) =>
                  <Input
                    type='text'
                    {...field}
                    error={errors.confirmPassword}
                    placeholder='sua senha...'
                  />
                }
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSubmit(onSignIn)}
              className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Entrar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          não tem um cadastro?{' '}
          <Link href="/signup" className="font-semibold leading-6 text-gray-700 hover:text-gray-600">
            cadastre-se aqui
          </Link>
        </p>
      </div>
    </div>
  )
}
