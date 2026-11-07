import './SearchAndFilters.css';

function SearchAndFilters({ query, onSearchChange, category, onCategoryChange }) {
  const categories = ['All posts', 'Technology', 'Design', 'Science'];

  return (
    <div className="search-filter-card">
      <label>Search sample posts</label>
      <input
        type="text"
        placeholder="Search topics, titles, communities..."
        value={query}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="filter-pills">
        {categories.map((cat) => (
          <button
            key={cat}
            className={category === cat ? 'pill active' : 'pill'}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
export default SearchAndFilters;
