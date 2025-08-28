import { HTMLAttributes } from "react";
import Image from "next/image";

interface HeroSectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

function HeroSection({ title, className, ...props }: HeroSectionProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center w-screen min-h-[300px] ${className}`}
      {...props}
    >
      {/* 배경 이미지 */}
      <Image
        src="/images/popcorn.jpg"
        alt="팝콘 배경"
        fill
        className="object-cover z-10"
        priority
        sizes="100vw"
      />

      {/* 제목 */}
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center text-primary text-shadow-lg relative z-10">
        {title}
      </h1>
    </div>
  );
}

export default HeroSection;
