### Home Feed

- Header with search and theme toggle
- Left sidebar: category filters + sort options
- Main feed: list of post cards with voting, title, metadata
- Responsive: sidebar collapses on mobile

### Post Detail

- Modal or dedicated route page
- Full post content, media, score, author info
- Nested comments list with load-more control
- Close button to return to feed

### Search & Errors

- Search term displayed above filtered results
- Empty state and error page with retry

┌─────────────────────────────────────────────┐
│ Header (fixed) │
│ [Logo] Search Bar [Nav Links] DarkMode │
├─────────────────────────────────────────────┤
│ │
│ Main Content Area │
│ ┌───────────────────────────────────────┐ │
│ │ Sidebar Filters │ Post Feed │ │
│ │ │ │ │
│ │ - Categories │ Post Card │ │
│ │ - Sort By │ Post Card │ │
│ │ - Status │ Post Card │ │
│ │ │ │ │
│ └───────────────────────────────────────┘ │
│ │
│ (Modal/Router for Post Detail) │
│ │
├─────────────────────────────────────────────┤
│ Footer (simple links, credits) │
└─────────────────────────────────────────────┘

App
├── Header
└── MainLayout
├── FeedSection (Main Column)
│ ├── HeroSection
│ ├── SearchAndFilters
│ │ ├── SearchBar
│ │ └── CategoryFilters
│ └── Feed
│ ├── FeedHeader
│ └── PostList
│ └── PostCard (Repeated)
└── Sidebar (Secondary Column)
├── UserJourneyCard
│ └── JourneyStepList
└── ResponsiveNote

src/
├── components/
│ ├── App/ # Root app component
│ │ ├── App.jsx
│ │ ├── App.module.css
│ │ └── **tests**/
│ │ └── App.test.jsx
│ │
│ ├── Header/ # Sticky top header
│ │ ├── Header.jsx
│ │ ├── Header.module.css
│ │ └── **tests**/
│ │ └── Header.test.jsx
│ │
│ ├── MainLayout/ # Two-column wrapper: Feed + Sidebar
│ │ ├── MainLayout.jsx
│ │ ├── MainLayout.module.css
│ │ └── **tests**/
│ │ └── MainLayout.test.jsx
│ │ │
│ │ ├── FeedSection/ # Main content column
│ │ │ ├── FeedSection.jsx
│ │ │ ├── FeedSection.module.css
│ │ │ └── **tests**/
│ │ │ └── FeedSection.test.jsx
│ │ │ │
│ │ │ ├── HeroSection/ # Welcome / intro banner
│ │ │ │ ├── HeroSection.jsx
│ │ │ │ ├── HeroSection.module.css
│ │ │ │ └── **tests**/
│ │ │ │ └── HeroSection.test.jsx
│ │ │ │
│ │ │ ├── SearchAndFilters/ # Search bar + category controls
│ │ │ │ ├── SearchAndFilters.jsx
│ │ │ │ ├── SearchAndFilters.module.css
│ │ │ │ └── **tests**/
│ │ │ │ └── SearchAndFilters.test.jsx
│ │ │ │ │
│ │ │ │ ├── SearchBar/
│ │ │ │ │ ├── SearchBar.jsx
│ │ │ │ │ ├── SearchBar.module.css
│ │ │ │ │ └── **tests**/
│ │ │ │ │ └── SearchBar.test.jsx
│ │ │ │ │
│ │ │ │ └── CategoryFilters/
│ │ │ │ ├── CategoryFilters.jsx
│ │ │ │ ├── CategoryFilters.module.css
│ │ │ │ └── **tests**/
│ │ │ │ └── CategoryFilters.test.jsx
│ │ │ │
│ │ │ └── Feed/ # Post list container
│ │ │ ├── Feed.jsx
│ │ │ ├── Feed.module.css
│ │ │ └── **tests**/
│ │ │ └── Feed.test.jsx
│ │ │ │
│ │ │ ├── FeedHeader/ # Sort info / results count
│ │ │ │ ├── FeedHeader.jsx
│ │ │ │ ├── FeedHeader.module.css
│ │ │ │ └── **tests**/
│ │ │ │ └── FeedHeader.test.jsx
│ │ │ │
│ │ │ └── PostList/ # Repeating posts container
│ │ │ ├── PostList.jsx
│ │ │ ├── PostList.module.css
│ │ │ └── **tests**/
│ │ │ └── PostList.test.jsx
│ │ │ │
│ │ │ └── PostCard/ # Single post (reusable)
│ │ │ ├── PostCard.jsx
│ │ │ ├── PostCard.module.css
│ │ │ └── **tests**/
│ │ │ └── PostCard.test.jsx
│ │ │
│ │ └── Sidebar/ # Secondary / info column
│ │ ├── Sidebar.jsx
│ │ ├── Sidebar.module.css
│ │ └── **tests**/
│ │ └── Sidebar.test.jsx
│ │ │
│ │ ├── UserJourneyCard/ # Project progress / steps card
│ │ │ ├── UserJourneyCard.jsx
│ │ │ ├── UserJourneyCard.module.css
│ │ │ └── **tests**/
│ │ │ └── UserJourneyCard.test.jsx
│ │ │ │
│ │ │ └── JourneyStepList/ # List of steps inside card
│ │ │ ├── JourneyStepList.jsx
│ │ │ ├── JourneyStepList.module.css
│ │ │ └── **tests**/
│ │ │ └── JourneyStepList.test.jsx
│ │ │
│ │ └── ResponsiveNote/ # Mobile/desktop hint banner
│ │ ├── ResponsiveNote.jsx
│ │ ├── ResponsiveNote.module.css
│ │ └── **tests**/
│ │ └── ResponsiveNote.test.jsx
│
│ └── [shared components go here — VoteButtons, ErrorMessage, etc.]
│
├── features/ # Redux state & logic
│ ├── posts/
│ ├── search/
│ └── filters/
│
├── store/
│ └── store.js
│
├── App.jsx
├── main.jsx
└── setupTests.js

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# RedditPortal
