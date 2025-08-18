# 🌿 브랜치 전략 및 Git 워크플로우

이 문서는 영화 검색 사이트 프로젝트의 브랜치 전략과 Git 워크플로우를 설명합니다.

## 🎯 브랜치 전략: GitHub Flow

### 📋 브랜치 구조

```
main (메인 브랜치 - 보호됨)
├── feature/movie-list        # 영화 목록 기능
├── feature/search-function   # 검색 기능
├── feature/movie-detail      # 영화 상세 기능
├── feature/infinite-scroll   # 무한 스크롤 기능
├── feature/dark-mode         # 다크모드 기능
├── feature/favorites         # 즐겨찾기 기능
└── feature/responsive-ui     # 반응형 UI 개선
```

### 🔒 브랜치 보호 규칙

- **main 브랜치**: 직접 push 금지
- **Pull Request 필수**: 모든 변경사항은 PR을 통해서만
- **코드 리뷰**: 최소 1명의 승인 필요 (자체 리뷰)
- **CI/CD 통과**: 빌드 및 테스트 통과 필수

## 🚀 Git 워크플로우

### 1. 새 기능 개발 시작

```bash
# main 브랜치에서 최신 상태 유지
git checkout main
git pull origin main

# 새 기능 브랜치 생성
git checkout -b feature/movie-list

# 개발 작업...
git add .
git commit -m "feat: 영화 목록 컴포넌트 구현"
git push origin feature/movie-list
```

### 2. Pull Request 생성

1. **GitHub에서 PR 생성**

   - `feature/movie-list` → `main`
   - 제목: `feat: 영화 목록 기능 구현`
   - 설명: 구현 내용, 테스트 방법, 스크린샷

2. **자체 코드 리뷰**

   - 코드 품질 확인
   - 성능 최적화 검토
   - 에러 처리 확인

3. **승인 및 머지**
   - 리뷰 완료 후 승인
   - Squash and merge 사용

### 3. 브랜치 정리

```bash
# 로컬 브랜치 삭제
git checkout main
git pull origin main
git branch -d feature/movie-list

# 원격 브랜치 삭제 (선택사항)
git push origin --delete feature/movie-list
```

## 📝 커밋 메시지 컨벤션

### Conventional Commits 형식

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### 타입 종류

- **feat**: 새로운 기능
- **fix**: 버그 수정
- **docs**: 문서 변경
- **style**: 코드 포맷팅
- **refactor**: 코드 리팩토링
- **test**: 테스트 추가/수정
- **chore**: 빌드 프로세스 또는 보조 도구 변경

### 예시

```bash
git commit -m "feat(movie): 영화 카드 컴포넌트 구현"
git commit -m "fix(search): 검색 결과 로딩 상태 버그 수정"
git commit -m "docs(readme): API 설정 가이드 추가"
git commit -m "style(ui): 버튼 컴포넌트 스타일 개선"
```

## 🔧 개발 환경 설정

### 1. Git Hooks 설정 (선택사항)

```bash
# pre-commit hook으로 코드 품질 검사
npm install --save-dev husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

### 2. lint-staged 설정

```json
// package.json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

## 📊 브랜치별 작업 내용

### feature/movie-list

- [ ] MovieCard 컴포넌트 구현
- [ ] MovieList 컴포넌트 구현
- [ ] 영화 데이터 fetch 로직
- [ ] 로딩 상태 처리

### feature/search-function

- [ ] SearchBar 컴포넌트 구현
- [ ] 검색 API 연동
- [ ] 디바운싱 적용
- [ ] 검색 결과 표시

### feature/movie-detail

- [ ] 영화 상세 페이지 구현
- [ ] 영화 정보 표시
- [ ] 캐스팅 정보 표시
- [ ] 관련 영화 추천

### feature/infinite-scroll

- [ ] 무한 스크롤 로직 구현
- [ ] Intersection Observer 적용
- [ ] 페이지네이션 처리
- [ ] 성능 최적화

### feature/dark-mode

- [ ] 테마 컨텍스트 구현
- [ ] 다크모드 스타일 적용
- [ ] 테마 토글 기능
- [ ] 로컬 스토리지 저장

---

**이 브랜치 전략을 따라 체계적이고 전문적인 개발을 진행해보세요!** 🚀
