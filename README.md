# boiler-plate

## 기술 스택

-   React
-   Typescript
-   Redux, Redux-saga, Redux-toolkit
-   @emotion

## 폴더 구조

```
public
|-index.html
src
|-api
|-components (재사용 컴포넌트)
|-hooks (custom hooks)
|-layout (레이아웃 관련 컴포넌트)
|-modules (전역 상태 관리)
|-pages (페이지 컴포넌트)
|-styles (전역 스타일, 스타일 변수 관리)
|-App.tsx
|-index.tsx
|-react-app-env.d.ts (현재 window object 타입 정의하여 확장 가능하도록 설정)
```

-   craco 라이브러리를 이용한 path 설정이 되어있고 `tsconfig.paths.json`파일에서 별칭을 만들어 사용 가능.

## node 패키지 인스톨

-   node 설치후 실행 (package.json 참고)

```
$ npm i
```

## 로컬 서버 실행

```
& npm start
```
