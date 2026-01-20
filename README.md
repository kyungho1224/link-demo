# LinkPlorer 데모 사이트

크리에이터와 광고주를 위한 역할별 랜딩 페이지 데모입니다.

## 🚀 배포

이 프로젝트는 GitHub Pages, Vercel, Netlify 등 다양한 플랫폼에서 배포할 수 있습니다.

자세한 배포 방법은 [DEPLOY.md](./DEPLOY.md)를 참고하세요.

## 기능

- **크리에이터 랜딩 페이지** (`/`): 크리에이터를 위한 메인 페이지
  - Hero 섹션
  - 문제 제기
  - 서비스 강점 (3단 카드)
  - 이용 방법 (3단계)
  - 성공 사례
  - 하단 CTA

- **광고주 랜딩 페이지** (`/biz`): 광고주를 위한 별도 페이지
  - Hero 섹션
  - 문제 해결
  - 서비스 강점
  - 프로세스
  - 파트너사/성과
  - 하단 CTA

- **역할 토글**: 헤더에서 크리에이터/광고주 역할 전환 가능

## 기술 스택

- React 19
- Vite
- React Router DOM

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 프로젝트 구조

```
src/
├── pages/
│   ├── CreatorLanding.jsx    # 크리에이터 랜딩 페이지
│   └── AdvertiserLanding.jsx # 광고주 랜딩 페이지
├── components/
│   ├── Header.jsx            # 공통 헤더 (역할 토글 포함)
│   ├── creator/              # 크리에이터 페이지 컴포넌트
│   │   ├── Hero.jsx
│   │   ├── ProblemStatement.jsx
│   │   ├── ServiceStrengths.jsx
│   │   ├── HowToUse.jsx
│   │   ├── SuccessStories.jsx
│   │   └── CTA.jsx
│   └── advertiser/          # 광고주 페이지 컴포넌트
│       ├── Hero.jsx
│       ├── ProblemSolving.jsx
│       ├── ServiceStrengths.jsx
│       ├── Process.jsx
│       ├── Partners.jsx
│       └── CTA.jsx
└── App.jsx                   # 라우팅 설정
```

## 벤치마킹

이 데모는 [Glowb.io](https://glowb.io/ko/creatorLanding)의 역할 분리 방식을 벤치마킹하여 제작되었습니다.
