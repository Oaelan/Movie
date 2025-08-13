# 📚 학습 가이드 - CSR vs SSR

이 문서는 영화 검색 사이트 프로젝트를 통해 CSR과 SSR의 차이점을 학습하기 위한 가이드입니다.

## 🎯 학습 목표

- **CSR (Client-Side Rendering)**과 **SSR (Server-Side Rendering)**의 차이점 이해
- **ISR (Incremental Static Regeneration)** 활용법 학습
- 실제 프로젝트에서의 성능 차이 체험
- SEO 최적화 방법 습득

## 📁 페이지별 렌더링 방식

### 🖥️ SSR (Server-Side Rendering) 페이지들

정적 콘텐츠, SEO 중요 페이지들

```
src/app/
├── page.tsx                    # 홈페이지 (SSR)
├── movies/
│   ├── page.tsx               # 영화 목록 (SSR)
│   └── [id]/
│       └── page.tsx           # 영화 상세 (SSR)
└── about/
    └── page.tsx               # 소개 페이지 (SSR)
```

**특징:**

- ✅ 서버에서 HTML 생성
- ✅ SEO 최적화
- ✅ 초기 로딩 빠름
- ✅ 검색 엔진 크롤링 최적화

### 💻 CSR (Client-Side Rendering) 페이지들

동적 인터랙션, 사용자별 콘텐츠

```
src/app/
├── search/
│   └── page.tsx               # 검색 결과 (CSR)
├── favorites/
│   └── page.tsx               # 즐겨찾기 (CSR)
├── profile/
│   └── page.tsx               # 사용자 프로필 (CSR)
└── watchlist/
    └── page.tsx               # 관람 목록 (CSR)
```

**특징:**

- ✅ 클라이언트에서 동적 렌더링
- ✅ 실시간 인터랙션
- ✅ 사용자별 맞춤 콘텐츠
- ⚠️ 초기 로딩 느림

### 🔄 ISR (Incremental Static Regeneration) 페이지들

자주 변경되지 않는 데이터

```
src/app/
├── movies/
│   ├── popular/
│   │   └── page.tsx           # 인기 영화 (ISR - 1시간마다 재생성)
│   ├── top-rated/
│   │   └── page.tsx           # 평점 높은 영화 (ISR - 6시간마다 재생성)
│   └── upcoming/
│       └── page.tsx           # 개봉 예정 영화 (ISR - 12시간마다 재생성)
```

**특징:**

- ✅ 빌드 시 정적 생성
- ✅ 주기적 재생성
- ✅ 캐싱으로 빠른 로딩
- ✅ SEO 최적화

## 🛠️ 구현 예시

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

## 📊 성능 비교 체크리스트

### 로딩 시간 측정

- [ ] SSR 페이지 초기 로딩 시간
- [ ] CSR 페이지 초기 로딩 시간
- [ ] ISR 페이지 로딩 시간
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

## 🎓 학습 노트

### 구현 단계별 기록

#### 1단계: SSR 페이지 구현

- **구현한 페이지**:
- **느낀 점**:
- **성능 측정 결과**:
- **어려웠던 부분**:

#### 2단계: CSR 페이지 구현

- **구현한 페이지**:
- **느낀 점**:
- **성능 측정 결과**:
- **어려웠던 부분**:

#### 3단계: ISR 페이지 구현

- **구현한 페이지**:
- **느낀 점**:
- **성능 측정 결과**:
- **어려웠던 부분**:

#### 4단계: 하이브리드 최적화

- **최적화 내용**:
- **성능 개선 결과**:
- **학습한 내용**:

## 🔍 추가 학습 자료

- [Next.js App Router 문서](https://nextjs.org/docs/app)
- [React Server Components](https://react.dev/learn/server-components)
- [Web.dev - Rendering on the Web](https://web.dev/rendering-on-the-web/)
- [MDN - Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

**이 가이드를 참고하여 CSR과 SSR의 차이점을 체험해보세요!** 🚀
