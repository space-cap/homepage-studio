# 🏠 Homepage Studio

> **15년 경력 개발자가 만드는 당신만의 홈페이지** — 빠르고, 아름답고, SEO 최적화까지!

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black?style=flat-square)](https://ui.shadcn.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

---

## 📌 프로젝트 소개

**Homepage Studio**는 홈페이지 제작 서비스를 홍보하는 랜딩 페이지입니다.  
소상공인, 기업 담당자, 프리랜서, 창업자를 대상으로 전문적인 웹사이트 제작 서비스를 소개하고,  
잠재 고객의 문의 전환율을 극대화하는 것을 목표로 합니다.

### ✨ 핵심 가치
- 🧑‍💻 **15년 경력** 개발자의 전문성
- ⚡ **Next.js 기반** 빠른 로딩 속도
- 📱 **반응형 디자인** — 모든 디바이스 완벽 대응
- 🔍 **SEO 최적화** 기본 제공
- 💰 **합리적인 가격** 플랜

---

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Components** | shadcn/ui |
| **Form** | React Hook Form |
| **Analytics** | Vercel Analytics / Google Analytics 4 |
| **Hosting** | Vercel |

---

## 📁 프로젝트 구조

```
homepage-studio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── metadata.ts
├── components/
│   ├── ui/                  # shadcn/ui 컴포넌트
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Process.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TechStack.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── common/
│       ├── SectionTitle.tsx
│       └── CTAButton.tsx
├── lib/
│   └── utils.ts
├── public/
│   ├── images/
│   └── icons/
├── docs/
│   └── PRD.md
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 시작하기

### 사전 요구사항

- Node.js 18.x 이상
- npm / yarn / pnpm / bun

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/your-username/homepage-studio.git
cd homepage-studio

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

---

## 📄 페이지 구성

| 섹션 | 설명 |
|------|------|
| **Hero** | 강력한 헤드라인과 CTA 버튼으로 첫인상 극대화 |
| **Features** | 반응형 디자인, SEO, 빠른 속도 등 6가지 핵심 기능 소개 |
| **Process** | 상담 → 디자인 → 개발 → 배포 4단계 제작 프로세스 |
| **Portfolio** | 실제 제작 사례 및 프로젝트 쇼케이스 |
| **Pricing** | Basic / Professional / Enterprise 3가지 요금제 |
| **Testimonials** | 고객 후기 및 평점 |
| **Tech Stack** | 사용 기술 스택 소개 |
| **FAQ** | 자주 묻는 질문 8가지 |
| **Contact** | 문의 폼 (이름, 이메일, 예산, 메시지) |

---

## 💰 요금제

| 플랜 | 가격 | 주요 내용 |
|------|------|-----------|
| **Basic** | ₩500,000~ | 5페이지, 반응형, SEO 기본, 1개월 무상 유지보수 |
| **Professional** | ₩1,500,000~ | 10페이지, 커스텀 디자인, CMS 연동, 3개월 무상 유지보수 |
| **Enterprise** | 협의 | 무제한 페이지, 완전 커스텀, API 연동, 6개월 무상 유지보수 |

---

## 📊 성능 목표

| 지표 | 목표값 |
|------|--------|
| **LCP** (Largest Contentful Paint) | < 2.5초 |
| **FID** (First Input Delay) | < 100ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 |
| **Lighthouse Performance** | > 90 |
| **Lighthouse SEO** | > 95 |

---

## 🗓 개발 일정

- [x] **Phase 1** — PRD 작성 및 기획 (1-2일)
- [x] **Phase 2** — 개발 환경 설정 (1일)
- [ ] **Phase 3** — 섹션별 개발 (5-7일)
- [ ] **Phase 4** — 최적화 및 테스트 (2-3일)
- [ ] **Phase 5** — 배포 (1일)

**총 예상 기간**: 10-14일

---

## 📚 관련 문서

- [📋 PRD (제품 요구사항 문서)](./docs/PRD.md)

---

## 🌐 배포

[Vercel](https://vercel.com/)을 통해 배포됩니다.  
`main` 브랜치에 푸시하면 자동으로 프로덕션 배포가 진행됩니다.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

---

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 및 비즈니스 목적으로 제작되었습니다.

---

<p align="center">
  Made with ❤️ by <strong>Homepage Studio</strong>
</p>
