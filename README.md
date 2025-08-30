# Movie Search Site

영화 API를 활용한 프론트엔드 포트폴리오 프로젝트입니다.

## 프로젝트 소개

TMDB API를 사용하여 영화 검색, 상세 정보 조회, 즐겨찾기 기능을 제공하는 모던한 웹 애플리케이션입니다.

### 주요 기능

- 실시간 영화 검색
- 다국어 지원 (한국어/영어)
- 반응형 디자인
- 다크모드 지원
- 즐겨찾기 영화 저장
- 영화 상세 정보 및 리뷰
- 인기/최신/평점순 영화 목록
- 무한 스크롤 검색
- 다크/라이트 테마 전환

## 기술 스택

### Frontend

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: React Context API
- **UI Library**: React 19
- **Internationalization**: next-intl 4

### Backend & API

- **API**: TMDB (The Movie Database)
- **HTTP Client**: Fetch API
- **Language Support**: 한국어(ko-KR), 영어(en-US)

### Development Tools

- **Package Manager**: npm
- **Linting**: ESLint 9
- **Build Tool**: Turbopack (개발), Webpack (프로덕션)
- **Icons**: React Icons

### Deployment

- **Platform**: Vercel
- **Environment**: Node.js

## CSS 최적화 전략

이 프로젝트는 **Tailwind CSS @apply**를 사용하여 CSS를 최적화합니다.

## 시작하기

### 1. 프로젝트 클론

```bash
git clone [repository-url]
cd movie
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

`.env.local` 파일을 생성하고 TMDB API 키를 추가하세요:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # 다국어 라우팅
│   │   ├── page.tsx       # 홈페이지
│   │   ├── search/        # 검색 페이지
│   │   ├── movies/        # 영화 상세 페이지
│   │   └── favorites/     # 즐겨찾기 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   └── globals.css        # 전역 스타일
├── components/            # 재사용 가능한 컴포넌트
│   ├── ui/               # 기본 UI 컴포넌트
│   ├── movie/            # 영화 관련 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   ├── search/           # 검색 관련 컴포넌트
│   ├── favorites/        # 즐겨찾기 관련 컴포넌트
│   └── detail/           # 영화 상세 관련 컴포넌트
├── lib/                  # 유틸리티 및 설정
│   ├── api/              # API 관련 함수
│   ├── types/            # TypeScript 타입 정의
│   └── utils/            # 유틸리티 함수
├── hooks/                # 커스텀 훅
├── context/              # React Context
├── i18n/                 # 다국어 설정
└── styles/               # 추가 스타일
```

## 다국어 지원

이 프로젝트는 **next-intl**을 사용하여 다국어를 지원합니다:

- **지원 언어**: 한국어(ko), 영어(en)
- **언어 전환**: 네비게이션 바의 언어 선택기
- **번역 파일**: `messages/ko.json`, `messages/en.json`
- **동적 언어**: TMDB API 호출 시 사용자 언어에 맞는 데이터 제공

### 언어별 TMDB API 지원

- **한국어**: `ko-KR` - 한국어 영화 정보
- **영어**: `en-US` - 영어 영화 정보

## 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행 (Turbopack 사용)
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 실행

## API 문서

이 프로젝트는 [TMDB API](https://developers.themoviedb.org/)를 사용합니다.

### 주요 API 엔드포인트

- **영화 검색**: `/search/movie`
- **영화 상세**: `/movie/{id}`
- **인기 영화**: `/discover/movie` (popularity.desc)
- **최신 영화**: `/discover/movie` (release_date.desc)
- **평점순 영화**: `/discover/movie` (vote_average.desc)

## 디자인 시스템

- **색상**: Tailwind CSS 4 기본 팔레트 활용
- **타이포그래피**: 시스템 폰트 스택
- **아이콘**: React Icons (Heroicons, FontAwesome)
- **애니메이션**: CSS Transitions
- **테마**: 다크모드/라이트모드 지원

## 반응형 디자인

- **모바일**: 320px ~ 768px
- **태블릿**: 768px ~ 1024px
- **데스크톱**: 1024px 이상

## 배포

이 프로젝트는 [Vercel](https://vercel.com)에 배포됩니다.

## 개발 가이드라인

자세한 개발 가이드라인은 [`.cursor/prompts.md`](./.cursor/prompts.md) 파일을 참고하세요.

## 브랜치 전략

이 프로젝트는 **GitHub Flow**를 사용합니다:

- 모든 기능은 `feature/` 브랜치에서 개발
- main 브랜치 보호 규칙 적용

자세한 브랜치 전략은 [`BRANCH_STRATEGY.md`](./BRANCH_STRATEGY.md)를 참고하세요.

## 연락처

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.
