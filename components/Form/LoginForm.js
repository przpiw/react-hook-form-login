import { useForm } from 'react-hook-form'
import { InputField } from './InputField'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // This will contain all form data once submit button is clicked.
  const onSubmit = (data) => {
    console.log(data)
    // {Email: 'John@example.com', Password: 'secret'}
  }

  register('Email', { required: { value: true, message: 'Email is required' } })
  register('Password', {
    required: { value: true, message: 'Password is required' },
  })
  return (
    <>
      <form id='loginForm' onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label='Email'
          type='email'
          register={register}
          error={errors.Email?.message}
        />
        <InputField
          label='Password'
          type='password'
          register={register}
          error={errors.Password?.message}
        />
      </form>
      <button style={{ background: '#5757ff' }} type='submit' form='loginForm'>
        Login
      </button>
    </>
  )
}
