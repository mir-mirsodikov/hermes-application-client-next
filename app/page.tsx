import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='mx-6 md:mx-0'>
      <h1 className="text-center lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold xl:w-1/2 lg:w-2/3 md:w-4/5 m-auto dark:text-gray-100">
        A sample social media app built with Next
      </h1>
      <p className="text-center lg:text-xl text-lg mt-4 xl:w-1/3 lg:w-1/2 md:w-2/3 m-auto text-gray-500 dark:text-gray-400">
        With Next 13 came drastic changes to the framework. This is my journey
        at learning the ropes.
      </p>
      <div className="flex flex-row justify-center space-x-4 mt-4">
        <Button text="Get Started" type="primary" />
        <Button text="GitHub" type="secondary" />
      </div>
    </div>
  );
}
