# 프로젝트 개요
- React 프로젝트에서 SEO 대응을 위한 최소 작업 대응

## 개발환경 세팅
### Requirements
- `react": "^18.2.0"`
- `react-helmet": "^6.1.0`

### Quick Start
```shell
$ git clone https://github.com/jkl851/front_seo_practice.git
$ cd front_seo_practice
```
- `npm`

```shell
$ npm install
$ npm run start
```
- `yarn`
```shell
$ yarn install
$ yarn start
```

## Favicon 세팅 <--- TODO
### 각 파일의 역할
- `favicon.ico` : 웹사이트의 파비콘을 정의합니다. 대부분의 웹 브라우저는 이 파일을 찾아서 탭, 북마크, 히스토리 목록 등에서 해당 웹사이트의 아이콘으로 사용합니다. 주로 16x16, 32x32, 48x48의 크기를 포함할 수 있습니다.

- `manifest.json` : 웹 애플리케이션의 메타데이터를 정의합니다. 특히, Progressive Web Apps(PWA)에서 중요한 역할을 합니다. 웹 앱의 이름, 시작 URL, 배경 색상, 테마 색상, 디스플레이 유형(예: 전체 화면) 및 브라우저 탭에 표시될 아이콘들을 포함할 수 있습니다.

- `browserconfig.xml` : 주로 Microsoft의 Internet Explorer와 Edge 브라우저를 위한 것으로, 시작 화면 타일, 타일 색상 및 타일에 사용될 이미지 등의 설정을 포함할 수 있습니다.

- `android-icon` : Android 기기에서 웹사이트를 홈 화면에 추가할 때 사용되는 아이콘을 지정합니다. 다양한 크기로 제공되어 다양한 해상도를 가진 기기에서 최적의 아이콘을 제공할 수 있습니다.

- `apple-icon` : Apple 기기에서 사용되는 아이콘을 지정합니다. iOS 기기의 Safari 브라우저에서 웹사이트를 홈 화면에 추가할 때 사용됩니다. apple-touch-icon으로도 알려져 있으며, 다양한 크기로 제공됩니다.

- `ms-icon` : Microsoft 기기에서 사용되는 아이콘을 지정합니다. 주로 Windows 8 이상에서 시작 화면 타일로 웹사이트를 추가할 때 사용됩니다. 다양한 크기로 제공되어 최적의 사용자 경험을 제공할 수 있습니다.

## SEO 스코어 분석
- 스코어 분석에 사용한 서비스: https://freetools.seobility.net

### 개선점
- H1-H6 headings 사용
- External links & Backlinks 설정
- gzip 압축
