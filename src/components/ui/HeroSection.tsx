import { HTMLAttributes } from "react";

interface HeroSectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

function HeroSection({ title, className, ...props }: HeroSectionProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-screen min-h-[300px] bg-[url('/images/popcorn.jpg')] bg-cover bg-center ${className}`}
      {...props}
    >
      <h1 className="text-6xl font-bold text-center text-primary text-shadow-lg">
        {title}
      </h1>
    </div>
  );
}

export default HeroSection;
