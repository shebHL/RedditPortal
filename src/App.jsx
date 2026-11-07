
import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/MainLayout/FeedSection/HeroSection/HeroSecton'
import SearchAndFilters from './components/MainLayout/FeedSection/SearchAndFilters/SearchAndFilters'
import Feed from './components/MainLayout/FeedSection/Feed/Feed'
import DiscussionModal from './components/MainLayout/FeedSection/Feed/DiscussionModal/DiscussionModal'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="content-grid">
        <div className="main-feed-column">
          <HeroSection />
          <SearchAndFilters />
          <Feed />
        </div>
        <aside className="sidebar-column">
          {/* <UserJourneyCard /> */}
        </aside>
      </main>
      <DiscussionModal />
    </div>
  )
}

export default App;
