# 배포 가이드

이 프로젝트를 GitHub에 업로드하고 배포하는 방법입니다.

## 1. GitHub 저장소 생성

1. GitHub에 로그인하고 새 저장소를 생성합니다
2. 저장소 이름을 `linkplorer-demo`로 설정 (또는 원하는 이름)
3. Public 또는 Private 선택

## 2. 로컬에서 Git 초기화 및 업로드

터미널에서 다음 명령어를 실행하세요:

```bash
# Git 초기화 (이미 되어있다면 생략)
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: LinkPlorer demo site"

# GitHub 저장소 연결 (YOUR_USERNAME을 본인의 GitHub 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/linkplorer-demo.git

# 메인 브랜치로 이름 변경 (필요한 경우)
git branch -M main

# GitHub에 푸시
git push -u origin main
```

## 3. GitHub Pages 설정

### 방법 1: GitHub Actions (권장)

1. GitHub 저장소 페이지로 이동
2. **Settings** → **Pages** 메뉴로 이동
3. **Source**에서 **GitHub Actions** 선택
4. `main` 브랜치에 코드를 푸시하면 자동으로 배포됩니다

### 방법 2: 수동 배포

1. 프로젝트 빌드:
```bash
npm run build
```

2. GitHub 저장소의 **Settings** → **Pages**로 이동
3. **Source**에서 **Deploy from a branch** 선택
4. Branch를 `gh-pages`로 설정하고 `/root` 선택
5. `dist` 폴더의 내용을 `gh-pages` 브랜치에 푸시

## 4. 배포 확인

배포가 완료되면 다음 URL에서 확인할 수 있습니다:
- `https://YOUR_USERNAME.github.io/linkplorer-demo/`

배포에는 보통 1-2분 정도 소요됩니다.

## 5. Vercel 또는 Netlify로 배포 (대안)

### Vercel
1. [vercel.com](https://vercel.com)에 로그인
2. **Add New Project** 클릭
3. GitHub 저장소 선택
4. 자동으로 배포됨

### Netlify
1. [netlify.com](https://netlify.com)에 로그인
2. **Add new site** → **Import an existing project**
3. GitHub 저장소 선택
4. Build command: `npm run build`
5. Publish directory: `dist`
6. 배포 완료

## 참고사항

- GitHub Pages는 Public 저장소에서 무료로 사용 가능
- Private 저장소는 GitHub Pro 플랜이 필요
- Vercel과 Netlify는 Private 저장소도 무료로 지원
