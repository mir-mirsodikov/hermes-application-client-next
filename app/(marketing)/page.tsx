import { AuthLogo, DatabaseLogo, NextLogo, TailwindLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { TechnologyCard } from '@/components/ui/tech-card';

export default function Home() {
  return (
    <>
      <section className="container py-8 md:pt-10 md:pb-20 lg:py-32">
        <h1 className="text-center lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold lg:w-2/3 md:w-4/5 m-auto dark:text-gray-100">
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
      </section>
      <section className="container">
        <h1 className="text-center lg:text-6xl md:text-5xl text-4xl font-semibold m-auto dark:text-gray-100">
          Technologies
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          This application is built by using the latest and greatest libraries,
          frameworks, and providers.
        </p>

        <div className="grid mx-auto lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-4 gap-4">
          <TechnologyCard
            title="Next.js"
            description="Next.js 13 with server-components, app directory, layouts, and routing."
            icon={<NextLogo />}
          />
          <TechnologyCard
            title="Tailwind"
            description="Custom components built with Tailwind CSS."
            icon={<TailwindLogo />}
          />
          <TechnologyCard
            title="Database"
            description="Database is built with Prisma and PlanetScale."
            icon={<DatabaseLogo />}
          />
          <TechnologyCard
            title="Authentication"
            description="Auth handled by Auth.js."
            icon={<AuthLogo />}
          />
        </div>
      </section>
    </>
  );
}
