import SignInForm from '@/components/sign-in-form/sign-in-form';
import SignUpForm from '@/components/sign-up-form/sign-up-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Auth = () => {
  return (
    <div className=' flex w-full h-screen justify-center items-center'>
      <Tabs defaultValue='account'  >
        <TabsList className=' w-full'>
          <TabsTrigger value='signin'>Sign In</TabsTrigger>
          <TabsTrigger value='singup'>Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value='signin'>
          <SignInForm />
        </TabsContent>
        <TabsContent value='singup'>
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
