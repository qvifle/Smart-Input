import { useForm } from 'react-hook-form'
import Input from './Input'
import EyeActive from './EyeActive'
import EyeInActive from './EyeINActive'
import UserIcon from './UserIcon'
import PasswordIcon from './PasswordIcon'

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <>

      <div className='flex items-center justify-center w-screen h-screen '>

        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className='flex flex-col items-center gap-5 '>
            <Input title='Login' error={errors.Login} register={register} regProps={{required: 'Login is Required'}} icon={<UserIcon />} />
            <Input icon={<PasswordIcon />} iconActive={<EyeActive />} iconInActive={<EyeInActive />} register={register} title='Password' error={errors.Password} regProps={{ required: 'Password is required' }} />
            <button className='font-semibold duration-100 rounded-2xl w-full p-3 bg-purple-500 border border-purple-500 hover:bg-inherit active:outline active:outline-1 active:outline-purple-500' type='submit'>submit</button>
          </div>
        </form>
      </div>
    </>
  )
}


export default App
