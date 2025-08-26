import { getMovieDetail } from "@/lib/api/movieApi";
import { DetailMovie } from "@/lib/types/movie";
import { MovieBackdrop, MoviePoster, MovieContent } from "@/components";

interface MovieDetailPageProps {
  params: {
    id: string;
  };
}

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  const { id } = params;
  const detail: DetailMovie = await getMovieDetail(id);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
  const posterUrl = detail.poster_path
    ? `${IMAGE_BASE_URL}/w500${detail.poster_path}`
    : null;
  const backdropUrl = detail.backdrop_path
    ? `${IMAGE_BASE_URL}/w1280${detail.backdrop_path}`
    : null;

  return (
    <div className="min-h-screen bg-primary">
      {/* 배경 이미지 */}
      <MovieBackdrop backdropUrl={backdropUrl} title={detail.title} />

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 포스터 */}
            <MoviePoster posterUrl={posterUrl} title={detail.title} />

            {/* 영화 정보 */}
            <MovieContent movie={detail} />
          </div>
        </div>
      </div>
    </div>
  );
}
