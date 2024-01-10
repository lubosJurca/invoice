import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from "zod"

// zod schema
const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5,"Password must contain at least 5 characters"),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"]
})



type TSignUpSchema = z.infer<typeof signUpSchema>

// sign in form 
const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit = async (data: TSignUpSchema) => {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve,1000));
    reset()
  };

  return (
    <div className=''>
      <form
        className='flex flex-col gap-2'
        onSubmit={handleSubmit(onSubmit)}
       
      >
        <label htmlFor='email'>email</label>
        <input
          type='email'
          id='email'
          className='outline'
          {...register('email')}
        />
        <p className='text-red-600'>{errors.email?.message}</p>

        <label htmlFor='password'>password</label>
        <input
          type='password'
          id='password'
          className='outline'
          {...register('password')}
        />
        <p className='text-red-600'>{errors.password?.message}</p>

        <label htmlFor='confirmPassword'>confirmPassword</label>
        <input
          type='password'
          id='confirmPassword'
          className='outline'
          {...register('confirmPassword')}
        />
        <p className='text-red-600'>{errors.confirmPassword?.message}</p>

        <button className='bg-red-400' disabled={isSubmitting}>Submit</button>
      </form>
      
    </div>
  );
};

export default SignInForm;
