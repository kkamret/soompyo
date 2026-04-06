# 숨표 (Soompyo) — MVP

> 데이터로 찾는 도심 속 완벽한 사색 공간 큐레이션 맵

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속

## 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx              # 스플래시 (→ /onboarding 자동 이동)
│   ├── onboarding/           # 온보딩 슬라이드
│   ├── auth/signup/          # 회원가입
│   ├── auth/login/           # 로그인
│   ├── home/                 # 홈 (AI 맞춤 추천)
│   ├── map/                  # 숨표 맵
│   ├── place/[id]/           # 공간 상세
│   ├── book/[id]/            # 도서 상세
│   └── my/                   # 마이페이지
├── components/
│   ├── BottomNav.tsx
│   ├── TopBar.tsx
│   └── ui/
│       ├── NoiseBadge.tsx
│       └── WellnessScore.tsx
└── lib/
    └── dummy.ts              # ← 더미 데이터 전부 여기
```

## 실데이터 연결 방법

`src/lib/dummy.ts` 파일의 각 변수를 실제 API 호출로 교체하면 됩니다.

| 더미 변수 | 교체 대상 | 담당 |
|---|---|---|
| `dummyWeather` | OpenWeatherMap API | 정연 |
| `dummyPlaces` | Supabase `places` 테이블 | 용혁 |
| `dummyBooks` | 카카오 책 검색 API | 정연 |
| `dummyRecommendation` | 추천 로직 API | 정연 |

## 배포

GitHub push 시 Vercel 자동 배포됩니다.
