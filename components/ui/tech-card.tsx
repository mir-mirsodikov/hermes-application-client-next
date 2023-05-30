import Image from 'next/image';

interface TechnologyCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
  link?: string;
}

export function TechnologyCard({
  title,
  description,
  icon,
  link,
}: TechnologyCardProps) {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] rounded-lg h-[180px]">
      <div className="bg-primary-light dark:bg-primary-dark/90 rounded-lg">
        <div className="flex flex-col justify-center border p-4 rounded-lg glass h-44">
          {icon}
          <h3 className="text-xl">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
