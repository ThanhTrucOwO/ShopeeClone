/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
// Không có tính năng tree-shaking
// import { omit } from 'lodash'

import omit from 'lodash/omit'
import { schema, Schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import authApi from 'src/apis/auth.api'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>
const registerSchema = schema.pick(['email', 'password', 'confirm_password'])

export default function Register() {
  const { t } = useTranslation('register')
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.registerAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
          // if (formError?.email) {
          //   setError('email', {
          //     message: formError.email,
          //     type: 'Server'
          //   })
          // }
          // if (formError?.password) {
          //   setError('password', {
          //     message: formError.password,
          //     type: 'Server'
          //   })
          // }
        }
      }
    })
  })

  // const email = watch('password')
  // console.log(email)
  return (
    <div>
      <div className='bg-orange'>
        <Helmet>
          <title>{t('signup')} | Shopee Clone</title>
          <meta name='description' content='Đăng ký tài khoản vào dự án Shopee Clone' />
        </Helmet>
        <div className='container'>
          <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
                <div className='text-2xl'>{t('signup')}</div>
                <Input
                  name='email'
                  register={register}
                  type='email'
                  className='mt-8'
                  errorMessage={errors.email?.message}
                  placeholder='Email'
                />
                <Input
                  name='password'
                  register={register}
                  type='password'
                  className='mt-2'
                  classNameEye='w-5 h-5 absolute top-[12px] right-[5px] cursor-pointer'
                  errorMessage={errors.password?.message}
                  placeholder='Password'
                  autoComplete='one'
                />
                <Input
                  name='confirm_password'
                  register={register}
                  type='password'
                  className='mt-2'
                  classNameEye='w-5 h-5 absolute top-[12px] right-[5px] cursor-pointer'
                  errorMessage={errors.confirm_password?.message}
                  placeholder='Confirm Password'
                  autoComplete='on'
                />

                <div className='mt-2'>
                  <Button
                    className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600 flex justify-center items-center'
                    isLoading={registerAccountMutation.isLoading}
                    disabled={registerAccountMutation.isLoading}
                  >
                    {t('signupbtn')}
                  </Button>
                </div>
                <div className='flex items-center justify-center mt-8'>
                  <span className='text-gray-300'>{t('haveacc')}</span>
                  <Link className='text-red-400 ml-1' to='/login'>
                    {t('login')}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
