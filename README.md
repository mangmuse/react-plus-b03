# 🍀 B03조 럭키비키마인드조 🍀
## ✨ 프로젝트 소개
하루 일정과 스케쥴을 공유하고, 계획 할 수 있는 사이트 입니다!
## 🕛 개발 기간
**24. 07. 08~ 24. 07. 14일**

## ⚙️라이브러리 및 개발 환경⚙️
- tailwindcss
- typescript
- next.js
- date-fns
- axios
- react-calendar
- supabase
- zustand
- tanstack-query
- tanstack-query dev tools

---

## 👥 팀원소개
|    김정훈    |    국민영    |    김성준    |    강동석    |    한소영    |
| :---: | :---: | :---: | :---: | :---: |
| 팀장 | 팀원 | 팀원 | 팀원 | 팀원 |
| [mangmuse](https://github.com/mangmuse)  | [minyoungKuk](https://github.com/minyoungKuk) | [ilovezerocokeya](https://github.com/ilovezerocokeya)| [show1486](https://github.com/show1486) | [fjw1010](https://github.com/fjw1010) | 

---

## 🛠️ 기술 스택
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)


## 💻 주요 기능
### 메인 페이지

### 상세 페이지

### 로그인

### 회원가입

## 🗂️ 폴더 구조
```
📦public
 ┣ 📂icons
 ┃ ┣ 📂profile
 ┃ ┃ ┗ 📜profile-placeholder2.png
 ┃ ┣ 📂sidebar
 ┃ ┃ ┣ 📜ic-calendar-check.png
 ┃ ┃ ┣ 📜ic-important.png
 ┃ ┃ ┣ 📜ic-logout.png
 ┃ ┃ ┣ 📜ic-today.png
 ┃ ┃ ┣ 📜ic-user-image.png
 ┃ ┃ ┗ 📜ic-user-page.png
 ┃ ┗ 📜filledStar.svg
 ┣ 📜cancel.png
 ┣ 📜Comment-icon.png
 ┣ 📜Ellipse.png
 ┣ 📜ic-arrow-left.png
 ┣ 📜ic-arrow-right.png
 ┣ 📜ic-close.png
 ┣ 📜ic-members.png
 ┣ 📜ic-trash-cans-icon.png
 ┣ 📜next.svg
 ┣ 📜pencil.png
 ┣ 📜shareicon.png
 ┣ 📜star.png
 ┣ 📜Vector.png
 ┗ 📜vercel.svg
📦src
 ┣ 📂app
 ┃ ┣ 📂(scheduler)
 ┃ ┃ ┣ 📂calendar
 ┃ ┃ ┃ ┣ 📂my
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂shared
 ┃ ┃ ┃ ┃ ┣ 📂[calendarId]
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜layout.tsx
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂todos
 ┃ ┃ ┃ ┣ 📂important
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂today
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜layout.tsx
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┣ 📂Calendar
 ┃ ┃ ┃ ┃ ┣ 📜Calendar.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📂DateSelector
 ┃ ┃ ┃ ┃ ┣ 📜DateSelector.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📂OpenTodoModal
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┗ 📜OpenTodoModal.tsx
 ┃ ┃ ┃ ┣ 📂ShareCalendar
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┗ 📜ShareCalendar.tsx
 ┃ ┃ ┃ ┣ 📂ShareTodoList
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┗ 📜ShareTodoList.tsx
 ┃ ┃ ┃ ┣ 📂SideBar
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┗ 📜SideBar.tsx
 ┃ ┃ ┃ ┣ 📂TodoBlock
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┗ 📜TodoBlock.tsx
 ┃ ┃ ┃ ┣ 📂TodoDate
 ┃ ┃ ┃ ┃ ┗ 📜TodoDate.tsx
 ┃ ┃ ┃ ┣ 📂TodoItem
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┗ 📜TodoItem.tsx
 ┃ ┃ ┃ ┣ 📂TodoList
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┗ 📜TodoList.tsx
 ┃ ┃ ┃ ┗ 📂UserProfileImage
 ┃ ┃ ┃ ┃ ┗ 📜UserProfileImage.tsx
 ┃ ┃ ┗ 📜layout.tsx
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📂logout
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂calendar
 ┃ ┃ ┃ ┣ 📂participant
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂calendars
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂comments
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂supabase
 ┃ ┃ ┃ ┗ 📜user.ts
 ┃ ┃ ┣ 📂todo
 ┃ ┃ ┃ ┣ 📂my
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┗ 📂todos
 ┃ ┃ ┃ ┣ 📂my
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂logout
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📂signup
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┗ 📜layout.tsx
 ┣ 📂components
 ┃ ┣ 📂Button
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂CalendarSection
 ┃ ┃ ┣ 📜CalendarSection.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂Content
 ┃ ┃ ┣ 📜Content.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂ContentInput
 ┃ ┃ ┣ 📜ContentInput.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂Input
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜Input.tsx
 ┃ ┣ 📂Loader
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜Loader.tsx
 ┃ ┣ 📂Mainbar
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜Mainbar.tsx
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📜AlertModal.tsx
 ┃ ┃ ┣ 📜BackDrop.tsx
 ┃ ┃ ┣ 📜ConfirmModal.tsx
 ┃ ┃ ┣ 📜DeleteModal.tsx
 ┃ ┃ ┣ 📜EditMenuBox.tsx
 ┃ ┃ ┣ 📜MdShareCalendars.tsx
 ┃ ┃ ┣ 📜MdSharedCalendarForm.tsx
 ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┣ 📜ModifyModal.tsx
 ┃ ┃ ┗ 📜TodoInput.tsx
 ┃ ┣ 📂Notshare
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜Notshare.tsx
 ┃ ┣ 📂Page
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜Page.tsx
 ┃ ┣ 📂profile
 ┃ ┃ ┗ 📜userProfile.tsx
 ┃ ┣ 📂providers
 ┃ ┃ ┣ 📜Providers.tsx
 ┃ ┃ ┗ 📜QueryProvider.tsx
 ┃ ┣ 📂Section
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜Section.tsx
 ┃ ┗ 📜TestComponent.tsx
 ┣ 📂hooks
 ┃ ┣ 📂useMutation
 ┃ ┃ ┣ 📜useAddCommentsMutation.ts
 ┃ ┃ ┣ 📜useDeleteCommentsMutation.ts
 ┃ ┃ ┣ 📜useScheduleMutation.ts
 ┃ ┃ ┗ 📜useUpdateCommentMutation.ts
 ┃ ┣ 📂useQuery
 ┃ ┃ ┣ 📜useCalendarsQuery.ts
 ┃ ┃ ┣ 📜useCommentsQuery.ts
 ┃ ┃ ┣ 📜useMyScheduleQuery.ts
 ┃ ┃ ┣ 📜useMyTodoQuery.ts
 ┃ ┃ ┣ 📜useTodoQuery.ts
 ┃ ┃ ┗ 📜useTodosQuery.ts
 ┃ ┗ 📜useASDAS.ts
 ┣ 📂services
 ┃ ┣ 📂comment
 ┃ ┃ ┗ 📜comment.api.ts
 ┃ ┗ 📂modal
 ┃ ┃ ┗ 📜modal.context.tsx
 ┣ 📂store
 ┃ ┣ 📜useasdStore.ts
 ┃ ┣ 📜useDateStore.ts
 ┃ ┗ 📜useTodoStore.ts
 ┣ 📂types
 ┃ ┣ 📜modal.type.ts
 ┃ ┣ 📜scheduler.type.ts
 ┃ ┗ 📜supabase.ts
 ┣ 📂utils
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜schedule.api.ts
 ┃ ┣ 📂supabase
 ┃ ┃ ┣ 📜client.ts
 ┃ ┃ ┣ 📜middleware.ts
 ┃ ┃ ┗ 📜server.ts
 ┃ ┣ 📜formatSchedules.ts
 ┃ ┗ 📜todoValidation.ts
 ┗ 📜middleware.ts
📦supabase
 ┣ 📜.gitignore
 ┣ 📜config.toml
 ┣ 📜page.tsx
 ┗ 📜seed.sql
📦Top Level
 ┣ 📜.env.local
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.mjs
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.mjs
 ┣ 📜README.md
 ┣ 📜tailwind.config.ts
 ┗ 📜tsconfig.json

```

## 🔗 링크
### [🌟 TEAM notion](https://www.notion.so/teamsparta/dd0e8ea642e6469bace23c11d21ab603)
### [🌟 TEAM figma](https://www.figma.com/design/AGeWvdTmU6HaJLGRHHKkBG/%EB%9F%AD%ED%82%A4%EB%B9%84%ED%82%A4%EB%A7%88%EC%9D%B8%EB%93%9C%EC%A1%B0?node-id=0-1&t=2DYDqmhYwns3wJEM-0)   
