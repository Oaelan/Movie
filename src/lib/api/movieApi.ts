import { Movie, TMDBResponse, DetailMovie } from "@/lib/types/movie";

// TMDB API 기본 설정
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

//공통 api 요청 함수
export async function fetchTMDBData(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<TMDBResponse> {
  if (!API_KEY) throw new Error("TMDB API 키를 설정해주세요!");

  const searchParams = new URLSearchParams({
    ...params,
    api_key: API_KEY,
    language: "ko-KR",
  });
  const url = `${BASE_URL}${endpoint}?${searchParams}`;
  const res = await fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("네트워크 오류");
      return res.json();
    })
    .catch((error) => {
      console.error("TMDB 데이터 패치 오류:", error);
      throw error;
    });
  return res;
}
//최신순 영화 요청 함수
export async function getLatestMovies(): Promise<Movie[]> {
  const today = new Date().toISOString().split("T")[0];
  const res = await fetchTMDBData("/discover/movie", {
    sort_by: "release_date.desc",
    "primary_release_date.lte": today,
    "vote_count.gte": "100",
    include_adult: "false",
    page: "1",
  })
    .then((data) => data.results)
    .catch((error) => {
      console.error("최신순 영화 패치 오류:", error);
      throw error;
    });
  return res;
}
//인기순 영화 요청 함수
export async function getPopularMovies(): Promise<Movie[]> {
  const res = await fetchTMDBData("/discover/movie", {
    sort_by: "popularity.desc",
    include_adult: "false",
    "vote_count.gte": "1000",
    page: "1",
  })
    .then((data) => data.results)
    .catch((error) => {
      console.error("인기순 영화 패치 오류:", error);
      throw error;
    });
  return res;
}
//평점순 영화 요청 함수
export async function getTopRatedMovies(): Promise<Movie[]> {
  const res = await fetchTMDBData("/discover/movie", {
    sort_by: "vote_average.desc",
    include_adult: "false",
    "vote_count.gte": "1000",
    page: "1",
  })
    .then((data) => data.results)
    .catch((error) => {
      console.error("평점순 영화 패치 오류:", error);
      throw error;
    });
  return res;
}
//영화 상세 정보 요청 함수
export async function getMovieDetail(id: string): Promise<DetailMovie> {
  if (!API_KEY) throw new Error("TMDB API 키를 설정해주세요!");
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: "ko-KR",
  });
  const url = `${BASE_URL}/movie/${id}?${searchParams}`;
  const res = await fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      return res.json();
    })
    .catch((error) => {
      console.error("영화 상세 정보 패치 오류:", error);
      throw error;
    });
  return res;
}
