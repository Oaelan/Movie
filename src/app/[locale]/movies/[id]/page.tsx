import { getMovieDetail } from "@/lib/api/movieApi";
import { DetailMovie } from "@/lib/types/movie";
import { MovieBackdrop, MoviePoster, MovieContent } from "@/components";
import { getImageUrl } from "@/lib/utils/imageUtils";
import { getLocale, getTranslations } from "next-intl/server";
import { Language } from "@/i18n/config";

interface MovieDetailPageProps {
  params: {
    id: string;
  };
}

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  const { id } = await params;
  const locale = await getLocale();
  const detail: DetailMovie = await getMovieDetail(id, locale as Language);
  const posterUrl = getImageUrl(detail.poster_path, "w500") || null;
  const backdropUrl = getImageUrl(detail.backdrop_path, "w1280") || null;
  const translations = await getTranslations("");

  return (
    <div className="min-h-screen bg-primary">
      {/* 배경 이미지 */}
      <MovieBackdrop backdropUrl={backdropUrl} title={detail.title} />

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 포스터 */}
            <MoviePoster
              posterUrl={posterUrl}
              title={detail.title}
              imageLoadingText={translations("movie.imageLoading")}
            />

            {/* 영화 정보 */}
            <MovieContent movie={detail} translations={translations} />
          </div>
        </div>
      </div>
    </div>
  );
}
