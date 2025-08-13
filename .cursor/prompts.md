# 🎬 영화 검색 사이트 포트폴리오 프로젝트 프롬프트

## 프로젝트 개요

- **프로젝트명**: Movie Search Site (영화 검색 사이트)
- **목적**: 프론트엔드 포트폴리오용 영화 API 기반 웹 애플리케이션
- **기술 스택**:
  - **Frontend**: Next.js 15, TypeScript, Tailwind CSS, React 19
  - **API**: TMDB (The Movie Database)
  - **Deployment**: Vercel

## 개발 가이드라인

### 🎯 목표

- TMDB API를 활용한 영화 검색 및 상세 정보 제공
- 반응형 디자인과 모던한 UI/UX 구현
- 포트폴리오 수준의 코드 품질과 구조

### 🛠 기술적 요구사항

- **API**: TMDB (The Movie Database) API 사용
- **상태 관리**: React Context API 또는 Zustand
- **스타일링**: Tailwind CSS (이미 설정됨)
- **타입 안전성**: TypeScript 엄격 모드
- **성능**: Next.js App Router 최적화

### 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── movies/            # 영화 관련 페이지
│   ├── search/            # 검색 페이지
│   └── layout.tsx         # 루트 레이아웃
├── components/            # 재사용 가능한 컴포넌트
│   ├── ui/               # 기본 UI 컴포넌트
│   ├── movie/            # 영화 관련 컴포넌트
│   └── layout/           # 레이아웃 컴포넌트
├── lib/                  # 유틸리티 및 설정
│   ├── api/              # API 관련 함수
│   ├── types/            # TypeScript 타입 정의
│   └── utils/            # 유틸리티 함수
├── hooks/                # 커스텀 훅
└── styles/               # 추가 스타일
```

### 🎨 UI/UX 요구사항

- **디자인**: 모던하고 깔끔한 인터페이스
- **반응형**: 모바일, 태블릿, 데스크톱 지원
- **다크모드**: 사용자 선호도에 따른 테마 전환
- **로딩 상태**: 스켈레톤 UI 및 로딩 스피너
- **에러 처리**: 사용자 친화적인 에러 메시지

### 🔍 주요 기능

1. **영화 검색**

   - 실시간 검색 (디바운싱 적용)
   - 검색 결과 필터링 (장르, 연도, 평점)
   - 검색 히스토리

2. **영화 목록**

   - 인기 영화, 최신 영화, 평점 높은 영화
   - 무한 스크롤 또는 페이지네이션
   - 영화 카드 호버 효과

3. **영화 상세**

   - 영화 정보, 캐스팅, 리뷰
   - 관련 영화 추천
   - 트레일러 및 이미지 갤러리

4. **사용자 기능**
   - 즐겨찾기 영화 저장 (로컬 스토리지)
   - 영화 평점 및 리뷰 작성
   - 관람 목록 관리

### 📝 코딩 컨벤션

- **네이밍**: camelCase (변수, 함수), PascalCase (컴포넌트)
- **주석**: 한글 주석으로 명확한 설명
- **타입**: 모든 API 응답에 대한 타입 정의
- **에러 처리**: try-catch와 적절한 에러 바운더리
- **성능**: React.memo, useMemo, useCallback 적절히 사용

### 🚀 성능 최적화

- **이미지 최적화**: Next.js Image 컴포넌트 사용
- **코드 스플리팅**: 동적 import 활용
- **캐싱**: API 응답 캐싱 전략
- **번들 최적화**: Tree shaking 및 코드 분할

### 🔧 개발 환경

- **API 키**: 환경 변수로 관리 (.env.local)
- **개발 서버**: `npm run dev` (Turbopack 사용)
- **빌드**: `npm run build`
- **린팅**: ESLint 설정 완료

### 📚 참고 자료

- TMDB API 문서: https://developers.themoviedb.org/
- Next.js 15 문서: https://nextjs.org/docs
- Tailwind CSS 문서: https://tailwindcss.com/docs

---

**이 프롬프트를 참고하여 일관성 있고 포트폴리오 수준의 코드를 작성해주세요!**
