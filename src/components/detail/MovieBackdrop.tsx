import Image from "next/image";

interface MovieBackdropProps {
  backdropUrl: string | null;
  title: string;
}

export default function MovieBackdrop({
  backdropUrl,
  title,
}: MovieBackdropProps) {
  if (!backdropUrl) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={backdropUrl}
        alt={title}
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary"></div>
    </div>
  );
}
