import './PostCard.css';

function PostCard({ post, onUpvote }) {
  return (
    <article className="post-card">
      <div className="post-meta">
        <span>{post.subreddit} · {post.category}</span>
        <span>{post.time}</span>
      </div>
      <h3 className="post-title">{post.title}</h3>
      <p className="post-snippet">{post.snippet}</p>
      <div className="post-footer">
        <button className="vote-button" onClick={onUpvote}>
          ▲ {post.votes} votes
        </button>
        <span>{post.comments} comments</span>
        <button className="link-button">View discussion →</button>
      </div>
    </article>
  );
}