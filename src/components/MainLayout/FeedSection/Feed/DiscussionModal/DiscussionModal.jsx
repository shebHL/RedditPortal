import './DiscussionModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../../store/store';

function DiscussionModal() {
  const dispatch = useDispatch();
  const activePost = useSelector((state) => state.posts.activePost);

  if (!activePost) return null; // Don't render if no post is selected

  return (
    <div className="modal-backdrop" onClick={() => dispatch(closeModal())}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => dispatch(closeModal())}>
          ✕
        </button>
        <span className="modal-meta">{activePost.subreddit} · {activePost.category}</span>
        <h2>{activePost.title}</h2>
        <p className="modal-snippet">{activePost.snippet}</p>

        <div className="comments-section">
          <h3>Discussion & Comments ({activePost.comments})</h3>
          <div className="comment-bubble">
            <p className="comment-author">u/react_dev</p>
            <p className="comment-text">This layout structure is super clean. Love the Redux implementation!</p>
          </div>
          <div className="comment-bubble">
            <p className="comment-author">u/ui_enthusiast</p>
            <p className="comment-text">How are you handling the responsiveness on small viewports?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscussionModal;