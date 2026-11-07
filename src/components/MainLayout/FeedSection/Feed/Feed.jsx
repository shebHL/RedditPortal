import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Feed.css';
import { fetchPosts, setActivePost } from '../../../../store/store';


function Feed() {
  const dispatch = useDispatch();
  const { items = [], searchQuery, selectedCategory } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filteredPosts = items.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All posts' || post.category === selectedCategory.toUpperCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="feed">
      <div className="feed-header">
        <h2>The feed</h2>
        <span>{filteredPosts.length} sample posts</span>
      </div>
      <div className="post-list">
        {filteredPosts.map((post) => (
          <article key={post.id} className="post-item">
            <div className="post-meta">
              <span>{post.subreddit}</span>
              <span>{post.category}</span>
              <span>{post.time}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.snippet}</p>
            <div className="post-stats">
              <span>Votes: {post.votes}</span>
              <span>Comments: {post.comments}</span>
        
              <button className="link-button" onClick={() => dispatch(setActivePost(post))}>
                View discussion →</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Feed;
