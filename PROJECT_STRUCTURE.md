# 📁 프로젝트 구조 가이드

이 문서는 영화 검색 사이트 프로젝트의 폴더 구조와 각 파일의 역할을 설명합니다.

## 🗂️ 전체 구조

```
movie-search-site/
├── .cursor/                   # Cursor IDE 설정
│   └── prompts.md            # 프로젝트 전용 프롬프트
├── PROJECT_STRUCTURE.md       # 이 파일
├── README.md                  # 프로젝트 설명서
├── package.json               # 프로젝트 의존성 및 스크립트
├── tsconfig.json              # TypeScript 설정
├── next.config.ts             # Next.js 설정
├── tailwind.config.js         # Tailwind CSS 설정
├── .env.example               # 환경 변수 템플릿
├── .env.local                 # 로컬 환경 변수 (gitignore됨)
├── public/                    # 정적 파일
│   ├── images/               # 이미지 파일
│   └── icons/                # 아이콘 파일
└── src/                       # 소스 코드
    ├── app/                   # Next.js App Router
    │   ├── layout.tsx         # 루트 레이아웃
    │   ├── page.tsx           # 홈페이지
    │   ├── globals.css        # 전역 스타일
    │   ├── movies/            # 영화 관련 페이지
    │   │   ├── page.tsx       # 영화 목록 페이지
    │   │   └── [id]/          # 동적 라우팅
    │   │       └── page.tsx   # 영화 상세 페이지
    │   └── search/            # 검색 페이지
    │       └── page.tsx       # 검색 결과 페이지
    ├── components/            # 재사용 가능한 컴포넌트
    │   ├── ui/               # 기본 UI 컴포넌트
    │   │   ├── Button.tsx    # 버튼 컴포넌트
    │   │   ├── Input.tsx     # 입력 컴포넌트
    │   │   ├── Card.tsx      # 카드 컴포넌트
    │   │   └── Loading.tsx   # 로딩 컴포넌트
    │   ├── movie/            # 영화 관련 컴포넌트
    │   │   ├── MovieCard.tsx # 영화 카드
    │   │   ├── MovieList.tsx # 영화 목록
    │   │   ├── MovieDetail.tsx # 영화 상세
    │   │   └── SearchBar.tsx # 검색바
    │   └── layout/           # 레이아웃 컴포넌트
    │       ├── Header.tsx    # 헤더
    │       ├── Footer.tsx    # 푸터
    │       └── Navigation.tsx # 네비게이션
    ├── lib/                  # 유틸리티 및 설정
    │   ├── api/              # API 관련 함수
    │   │   ├── tmdb.ts       # TMDB API 클라이언트
    │   │   ├── movies.ts     # 영화 API 함수
    │   │   └── search.ts     # 검색 API 함수
    │   ├── types/            # TypeScript 타입 정의
    │   │   ├── movie.ts      # 영화 관련 타입
    │   │   ├── api.ts        # API 응답 타입
    │   │   └── common.ts     # 공통 타입
    │   └── utils/            # 유틸리티 함수
    │       ├── format.ts     # 포맷팅 함수
    │       ├── validation.ts # 검증 함수
    │       └── storage.ts    # 로컬 스토리지 함수
    ├── hooks/                # 커스텀 훅
    │   ├── useMovies.ts      # 영화 데이터 훅
    │   ├── useSearch.ts      # 검색 훅
    │   ├── useLocalStorage.ts # 로컬 스토리지 훅
    │   └── useDebounce.ts    # 디바운스 훅
    ├── context/              # React Context
    │   ├── MovieContext.tsx  # 영화 상태 관리
    │   ├── SearchContext.tsx # 검색 상태 관리
    │   └── ThemeContext.tsx  # 테마 상태 관리
    └── styles/               # 추가 스타일
        ├── components.css    # 컴포넌트별 스타일
        └── animations.css    # 애니메이션 스타일
```

## 📋 각 폴더별 설명

### `/src/app/`

Next.js 15의 App Router를 사용하는 페이지 컴포넌트들이 위치합니다.

### `/src/components/`

재사용 가능한 UI 컴포넌트들을 기능별로 분류하여 관리합니다.

### `/src/lib/`

프로젝트 전반에서 사용되는 유틸리티 함수들과 타입 정의를 관리합니다.

### `/src/hooks/`

커스텀 React 훅들을 관리합니다. 비즈니스 로직을 컴포넌트와 분리하여 재사용성을 높입니다.

### `/src/context/`

React Context를 사용한 전역 상태 관리를 담당합니다.

## 🎯 파일 네이밍 컨벤션

- **컴포넌트**: PascalCase (예: `MovieCard.tsx`)
- **훅**: camelCase + `use` 접두사 (예: `useMovies.ts`)
- **유틸리티**: camelCase (예: `formatDate.ts`)
- **타입**: camelCase (예: `movieTypes.ts`)
- **상수**: UPPER_SNAKE_CASE (예: `API_ENDPOINTS.ts`)

## 📝 컴포넌트 구조 예시

```typescript
// src/components/movie/MovieCard.tsx
import React from 'react';
import { Movie } from '@/lib/types/movie';

interface MovieCardProps {
  movie: Movie;
  onFavorite?: (movieId: number) => void;
}

export function MovieCard({ movie, onFavorite }: MovieCardProps) {
  // 컴포넌트 로직
  return (
    // JSX
  );
}
```

## 🔧 설정 파일

- **`.cursor/prompts.md`**: Cursor IDE용 프로젝트 전용 프롬프트
- **`tsconfig.json`**: TypeScript 컴파일러 설정
- **`next.config.ts`**: Next.js 빌드 및 런타임 설정
- **`tailwind.config.js`**: Tailwind CSS 커스터마이징

이 구조를 따라 개발하면 일관성 있고 유지보수하기 쉬운 코드를 작성할 수 있습니다.
