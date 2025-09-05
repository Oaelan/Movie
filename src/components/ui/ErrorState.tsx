interface ErrorStateProps {
  message?: string;
}

export default function ErrorState({
  message = "다시 시도해주세요.",
}: ErrorStateProps) {
  return (
    <div className="min-h-screen bg-primary pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center py-20">
          <p className="text-text-secondary">{message}</p>
        </div>
      </div>
    </div>
  );
}
