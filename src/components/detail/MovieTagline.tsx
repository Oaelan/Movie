interface MovieTaglineProps {
  tagline: string;
}

export default function MovieTagline({ tagline }: MovieTaglineProps) {
  if (!tagline) return null;

  return (
    <p className="text-lg text-text-muted italic">&ldquo;{tagline}&rdquo;</p>
  );
}
