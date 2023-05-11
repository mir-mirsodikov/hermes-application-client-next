import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-7xl font-semibold w-1/2 m-auto dark:text-gray-100">
        A Twitter-like clone built with Next
      </h1>
      <p className="text-center text-xl mt-4 w-1/3 m-auto text-gray-500 dark:text-gray-400">
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
