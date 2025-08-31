interface LoadingStateProps {
  message: string;
}

export default function LoadingState({ message }: LoadingStateProps) {
  return (
    <div className="min-h-screen bg-primary pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center py-20">
          <p className="text-text-muted text-lg">{message}</p>
        </div>
      </div>
    </div>
  );
}
