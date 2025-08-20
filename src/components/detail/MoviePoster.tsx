import Image from "next/image";

interface MoviePosterProps {
  posterUrl: string | null;
  title: string;
}

export default function MoviePoster({ posterUrl, title }: MoviePosterProps) {
  return (
    <div className="flex-shrink-0">
      {posterUrl ? (
        <div className="w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={posterUrl}
            alt={title}
            width={320}
            height={480}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-80 h-96 bg-secondary rounded-lg flex items-center justify-center shadow-2xl">
          <p className="text-text-secondary text-center px-4">이미지 준비중</p>
        </div>
      )}
    </div>
  );
}
