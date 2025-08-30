# 학습 가이드 - CSR vs SSR

이 문서는 영화 검색 사이트 프로젝트를 통해 CSR과 SSR의 차이점을 학습하기 위한 가이드입니다.

## 학습 목표

- **CSR (Client-Side Rendering)**과 **SSR (Server-Side Rendering)**의 차이점 이해
- 실제 프로젝트에서의 성능 차이 체험
- SEO 최적화 방법 습득

## 페이지별 렌더링 방식

### SSR (Server-Side Rendering) 페이지들

정적 콘텐츠, SEO 중요 페이지들

```
src/app/
├── page.tsx                    # 홈페이지 (SSR)
└── movies/
    └── [id]/
        └── page.tsx           # 영화 상세 (SSR)
```

**특징:**

- ✅ 서버에서 HTML 생성
- ✅ SEO 최적화
- ✅ 초기 로딩 빠름
- ✅ 검색 엔진 크롤링 최적화

### CSR (Client-Side Rendering) 페이지들

동적 인터랙션, 사용자별 콘텐츠

```
src/app/
├── search/
│   └── page.tsx               # 검색 결과 (CSR)
└── favorites/
    └── page.tsx               # 즐겨찾기 (CSR)
```

**특징:**

- ✅ 클라이언트에서 동적 렌더링
- ✅ 실시간 인터랙션
- ✅ 사용자별 맞춤 콘텐츠
- ⚠️ 초기 로딩 느림

## 구현 예시

### SSR 페이지 예시 (영화 상세)

```typescript
// src/app/movies/[id]/page.tsx
export default async function MovieDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // 서버에서 데이터 fetch
  const movie = await fetchMovie(params.id);
  const credits = await fetchCredits(params.id);

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {/* 정적 콘텐츠 - SEO 최적화 */}
    </div>
  );
}
```

### CSR 페이지 예시 (검색)

```typescript
// src/app/search/page.tsx
"use client";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // 클라이언트에서 동적 검색
  const handleSearch = async (searchQuery: string) => {
    const data = await searchMovies(searchQuery);
    setResults(data);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={results} />
    </div>
  );
}
```

## 프로젝트 진행 중 해결한 문제들

### 1. 다국어 지원 구현 문제

**문제**: Nav 컴포넌트에서 언어 변경 시 번역이 즉시 적용되지 않는 문제

**원인 분석**:

- Nav 컴포넌트가 서버 컴포넌트로 구현되어 클라이언트 사이드 라우팅에 반응하지 않음
- `router.push()`로 언어 변경 시 서버 컴포넌트가 다시 실행되지 않음
- NextIntlClientProvider의 locale이 업데이트되지 않음

**해결 방법**:

1. **서버 컴포넌트 방식**: `window.location.href` 사용하여 페이지 새로고침
2. **클라이언트 컴포넌트 방식**: `useTranslations` 훅 사용
3. **하이브리드 방식**: 언어 변경 감지 후 새로고침

**학습 내용**:

- 서버 컴포넌트와 클라이언트 컴포넌트의 렌더링 차이점
- next-intl의 서버/클라이언트 사이드 동작 방식
- 레이아웃 컴포넌트의 특성과 제약사항

### 2. 즐겨찾기 페이지 로딩 상태 문제

**문제**: "로딩 화면 → 빈 화면 → 데이터 화면" 순서로 나타나는 문제

**원인 분석**:

- `useFavorites` 훅에서 두 개의 useEffect가 순차적으로 실행
- 첫 번째 useEffect에서 `isMounted: true` 설정 후 잠깐 `isLoading: false` 상태
- 두 번째 useEffect에서 다시 `isLoading: true`로 설정

**해결 방법**:

```typescript
// 좋아요 목록이 비어있으면 바로 로딩 완료
if (ids.length === 0) {
  setIsLoading(false);
}

// 좋아요 목록이 비어있으면 패칭하지 않음
if (likedMovieIds.length === 0) {
  return;
}
```

**학습 내용**:

- React 생명주기와 상태 관리의 중요성
- useEffect의 실행 순서와 의존성 관리
- 로딩 상태의 일관성 유지 방법

### 3. 검색 입력 필드 쿼리 지속성 문제

**문제**: 페이지 이동 시 검색 입력 필드에 이전 쿼리가 남아있는 문제

**원인 분석**:

- 클라이언트 사이드 라우팅으로 페이지 이동 시 컴포넌트 상태가 유지됨
- URL의 query 파라미터와 입력 필드 상태가 동기화되지 않음

**해결 방법**:

```typescript
// useSearchInput 훅에서 useEffect 사용
useEffect(() => {
  setQuery(searchQuery);
}, [searchQuery]);
```

**학습 내용**:

- URL 상태와 컴포넌트 상태의 동기화
- React 생명주기를 활용한 상태 관리
- 클라이언트 사이드 라우팅의 특성

### 4. TMDB API 다국어 지원 구현

**문제**: API 호출 시 언어별 데이터를 제공하지 않는 문제

**원인 분석**:

- 모든 API 호출에서 `language: "ko-KR"`로 고정
- 사용자 언어 설정과 API 언어가 불일치

**해결 방법**:

```typescript
// localeUtils.ts - 언어 변환 유틸 함수
export function getTMDBLocale(locale: Language): string {
  if (locale === "ko") {
    return "ko-KR";
  } else {
    return "en-US";
  }
}

// API 함수에 locale 파라미터 추가
export async function fetchTMDBData(
  endpoint: string,
  params: Record<string, string> = {},
  locale: Language = "ko"
): Promise<TMDBResponse> {
  const searchParams = new URLSearchParams({
    ...params,
    api_key: API_KEY,
    language: getTMDBLocale(locale),
  });
  // ...
}
```

**학습 내용**:

- API 설계 시 확장성 고려의 중요성
- 유틸 함수 분리로 코드 재사용성 향상
- TypeScript를 활용한 타입 안전성 확보

## 성능 비교 체크리스트

### 로딩 시간 측정

- [ ] SSR 페이지 초기 로딩 시간
- [ ] CSR 페이지 초기 로딩 시간
- [ ] 개발자 도구 Network 탭 기록

### SEO 점수 측정

- [ ] Lighthouse 검사 실행
- [ ] 메타데이터 완성도 확인
- [ ] 검색 엔진 크롤링 테스트
- [ ] Open Graph 태그 확인

### 사용자 경험 체험

- [ ] 각 페이지별 실제 사용 경험
- [ ] 로딩 상태 UI 비교
- [ ] 인터랙션 반응성 체험
- [ ] 모바일 환경 테스트

## 학습 노트

### 구현 단계별 기록

#### 1단계: SSR 페이지 구현

- **구현한 페이지**: 홈페이지, 영화 상세 페이지
- **느낀 점**: 서버에서 미리 렌더링되어 초기 로딩이 빠름
- **성능 측정 결과**: Lighthouse SEO 점수 95+
- **어려웠던 부분**: 서버 컴포넌트에서 클라이언트 기능 사용 시 제약

#### 2단계: CSR 페이지 구현

- **구현한 페이지**: 검색 페이지, 즐겨찾기 페이지
- **느낀 점**: 동적 인터랙션이 자연스럽고 반응성이 좋음
- **성능 측정 결과**: 초기 로딩은 느리지만 인터랙션 후 빠름
- **어려웠던 부분**: 상태 관리와 생명주기 관리

#### 3단계: 다국어 지원 구현

- **구현한 페이지**: 전체 애플리케이션
- **느낀 점**: next-intl의 강력함과 복잡성
- **성능 측정 결과**: 언어별 번들 크기 증가
- **어려웠던 부분**: 서버/클라이언트 컴포넌트 간 번역 동기화

#### 4단계: API 다국어 지원

- **구현한 페이지**: 모든 API 호출
- **느낀 점**: 설계 단계에서 확장성 고려의 중요성
- **성능 측정 결과**: 언어별 API 응답 시간 차이
- **어려웠던 부분**: 기존 코드 리팩토링

## 추가 학습 자료

- [Next.js App Router 문서](https://nextjs.org/docs/app)
- [React Server Components](https://react.dev/learn/server-components)
- [Web.dev - Rendering on the Web](https://web.dev/rendering-on-the-web/)
- [MDN - Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [next-intl 공식 문서](https://next-intl-docs.vercel.app/)
- [TMDB API 문서](https://developers.themoviedb.org/)

---

**이 가이드를 참고하여 CSR과 SSR의 차이점을 체험해보세요!**
