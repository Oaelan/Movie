# 프로젝트 구조 가이드

이 문서는 영화 검색 사이트 프로젝트의 폴더 구조와 각 파일의 역할을 설명합니다.

## 전체 구조

```
movie/
├── .cursor/                   # Cursor IDE 설정
│   └── prompts.md            # 프로젝트 전용 프롬프트
├── PROJECT_STRUCTURE.md       # 이 파일
├── README.md                  # 프로젝트 설명서
├── LEARNING_GUIDE.md          # 학습 가이드
├── BRANCH_STRATEGY.md         # 브랜치 전략
├── package.json               # 프로젝트 의존성 및 스크립트
├── tsconfig.json              # TypeScript 설정
├── next.config.ts             # Next.js 설정
├── eslint.config.mjs          # ESLint 설정
├── postcss.config.mjs         # PostCSS 설정
├── .env.example               # 환경 변수 템플릿
├── .env.local                 # 로컬 환경 변수 (gitignore됨)
├── public/                    # 정적 파일
│   ├── images/               # 이미지 파일
│   │   └── popcorn.jpg       # 메인 이미지
│   └── icons/                # 아이콘 파일
├── messages/                  # 다국어 번역 파일
│   ├── ko.json               # 한국어 번역
│   └── en.json               # 영어 번역
└── src/                       # 소스 코드
    ├── app/                   # Next.js App Router
    │   ├── layout.tsx         # 루트 레이아웃
    │   ├── globals.css        # 전역 스타일
    │   ├── test/              # 테스트 페이지
    │   └── [locale]/          # 다국어 라우팅
    │       ├── page.tsx       # 홈페이지
    │       ├── search/        # 검색 페이지
    │       │   └── page.tsx   # 검색 결과 페이지
    │       ├── movies/        # 영화 관련 페이지
    │       │   └── [id]/      # 동적 라우팅
    │       │       └── page.tsx # 영화 상세 페이지
    │       └── favorites/     # 즐겨찾기 페이지
    │           └── page.tsx   # 즐겨찾기 목록 페이지
    ├── components/            # 재사용 가능한 컴포넌트
    │   ├── index.ts           # 컴포넌트 export
    │   ├── ui/               # 기본 UI 컴포넌트
    │   │   ├── Dropdown.tsx   # 드롭다운 컴포넌트
    │   │   ├── ErrorState.tsx # 에러 상태 컴포넌트
    │   │   ├── HeroSection.tsx # 히어로 섹션
    │   │   ├── Indicator.tsx  # 인디케이터 컴포넌트
    │   │   ├── LanguageSelector.tsx # 언어 선택기
    │   │   ├── Like.tsx       # 좋아요 버튼
    │   │   ├── LoadingState.tsx # 로딩 상태 컴포넌트
    │   │   ├── SearchInput.tsx # 검색 입력 컴포넌트
    │   │   └── SliderButton.tsx # 슬라이더 버튼
    │   ├── movie/            # 영화 관련 컴포넌트
    │   │   ├── MovieCard.tsx # 영화 카드
    │   │   ├── MovieCardSlider.tsx # 영화 카드 슬라이더
    │   │   └── Rating.tsx    # 평점 컴포넌트
    │   ├── layout/           # 레이아웃 컴포넌트
    │   │   └── Nav.tsx       # 네비게이션 바
    │   ├── search/           # 검색 관련 컴포넌트
    │   │   ├── InfiniteScrollTrigger.tsx # 무한 스크롤 트리거
    │   │   ├── SearchResultHeader.tsx # 검색 결과 헤더
    │   │   └── SearchResultList.tsx # 검색 결과 목록
    │   ├── favorites/        # 즐겨찾기 관련 컴포넌트
    │   │   ├── FavoritesHeader.tsx # 즐겨찾기 헤더
    │   │   └── FavoritesList.tsx # 즐겨찾기 목록
    │   └── detail/           # 영화 상세 관련 컴포넌트
    │       ├── MovieBackdrop.tsx # 영화 배경 이미지
    │       ├── MovieBudget.tsx # 영화 예산 정보
    │       ├── MovieContent.tsx # 영화 콘텐츠
    │       ├── MovieGenres.tsx # 영화 장르
    │       ├── MovieHeader.tsx # 영화 헤더
    │       ├── MovieMetaInfo.tsx # 영화 메타 정보
    │       ├── MovieOverview.tsx # 영화 개요
    │       ├── MoviePoster.tsx # 영화 포스터
    │       ├── MovieProduction.tsx # 영화 제작사
    │       ├── MovieRating.tsx # 영화 평점
    │       └── MovieTagline.tsx # 영화 태그라인
    ├── lib/                  # 유틸리티 및 설정
    │   ├── api/              # API 관련 함수
    │   │   └── movieApi.ts   # TMDB API 함수들
    │   ├── types/            # TypeScript 타입 정의
    │   │   └── movie.ts      # 영화 관련 타입
    │   └── utils/            # 유틸리티 함수
    │       ├── cookies.ts    # 쿠키 유틸리티
    │       ├── homeDataUtils.ts # 홈 데이터 유틸리티
    │       ├── imageUtils.ts # 이미지 유틸리티
    │       └── localeUtils.ts # 언어 유틸리티
    ├── hooks/                # 커스텀 훅
    │   ├── useFetch.ts       # 데이터 페칭 훅
    │   ├── useFavorites.ts   # 즐겨찾기 훅
    │   ├── useInfiniteFetch.ts # 무한 스크롤 훅
    │   ├── useLike.ts        # 좋아요 훅
    │   ├── useSearchInput.ts # 검색 입력 훅
    │   └── useSlider.ts      # 슬라이더 훅
    ├── context/              # React Context
    │   └── ThemeContext.tsx  # 테마 상태 관리
    ├── i18n/                 # 다국어 설정
    │   ├── config.ts         # 다국어 설정
    │   └── request.ts        # 다국어 요청 설정
    └── styles/               # 추가 스타일
```

## 각 폴더별 설명

### `/src/app/`

Next.js 15의 App Router를 사용하는 페이지 컴포넌트들이 위치합니다. 다국어 지원을 위해 `[locale]` 동적 라우팅을 사용합니다.

### `/src/components/`

재사용 가능한 UI 컴포넌트들을 기능별로 분류하여 관리합니다.

- **ui/**: 기본 UI 컴포넌트 (버튼, 입력, 로딩 등)
- **movie/**: 영화 관련 컴포넌트
- **layout/**: 레이아웃 관련 컴포넌트
- **search/**: 검색 관련 컴포넌트
- **favorites/**: 즐겨찾기 관련 컴포넌트
- **detail/**: 영화 상세 관련 컴포넌트

### `/src/lib/`

프로젝트 전반에서 사용되는 유틸리티 함수들과 타입 정의를 관리합니다.

- **api/**: TMDB API 관련 함수들
- **types/**: TypeScript 타입 정의
- **utils/**: 유틸리티 함수들

### `/src/hooks/`

커스텀 React 훅들을 관리합니다. 비즈니스 로직을 컴포넌트와 분리하여 재사용성을 높입니다.

### `/src/context/`

React Context를 사용한 전역 상태 관리를 담당합니다. 현재는 테마 관리만 구현되어 있습니다.

### `/src/i18n/`

다국어 지원을 위한 설정 파일들이 위치합니다.

### `/messages/`

다국어 번역 파일들이 위치합니다. 한국어(ko.json)와 영어(en.json)를 지원합니다.

## 파일 네이밍 컨벤션

- **컴포넌트**: PascalCase (예: `MovieCard.tsx`)
- **훅**: camelCase + `use` 접두사 (예: `useMovies.ts`)
- **유틸리티**: camelCase (예: `formatDate.ts`)
- **타입**: camelCase (예: `movieTypes.ts`)
- **상수**: UPPER_SNAKE_CASE (예: `API_ENDPOINTS.ts`)

## 컴포넌트 구조 예시

```typescript
// src/components/movie/MovieCard.tsx
import React from 'react';
import { Movie } from '@/lib/types/movie';

interface MovieCardProps {
  movie: Movie;
  onFavorite?: (movieId: number) => void;
}

export default function MovieCard({ movie, onFavorite }: MovieCardProps) {
  // 컴포넌트 로직
  return (
    // JSX
  );
}
```

## 설정 파일

- **`.cursor/prompts.md`**: Cursor IDE용 프로젝트 전용 프롬프트
- **`tsconfig.json`**: TypeScript 컴파일러 설정
- **`next.config.ts`**: Next.js 빌드 및 런타임 설정
- **`eslint.config.mjs`**: ESLint 설정
- **`postcss.config.mjs`**: PostCSS 설정
- **`messages/`**: 다국어 번역 파일

## 주요 특징

1. **다국어 지원**: `[locale]` 동적 라우팅과 next-intl을 사용한 다국어 지원
2. **컴포넌트 분리**: 기능별로 세분화된 컴포넌트 구조
3. **타입 안전성**: TypeScript를 활용한 타입 안전성 확보
4. **재사용성**: 커스텀 훅과 유틸리티 함수를 통한 코드 재사용성
5. **상태 관리**: React Context를 활용한 전역 상태 관리

이 구조를 따라 개발하면 일관성 있고 유지보수하기 쉬운 코드를 작성할 수 있습니다.
