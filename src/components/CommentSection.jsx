import { useState } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addComment = (parentId = null, content) => {
    const commentContent = content || newComment;
    if (!commentContent.trim()) return;

    const comment = {
      id: Date.now(),
      content: commentContent,
      parentId,
      postId,
      replies: []
    };

    if (parentId === null) {
      setComments(prevComments => [...prevComments, comment]);
    } else {
      setComments(prevComments => {
        const addReply = (comments) => {
          return comments.map(c => {
            if (c.id === parentId) {
              return {
                ...c,
                replies: [...c.replies, comment]
              };
            }
            if (c.replies.length > 0) {
              return {
                ...c,
                replies: addReply(c.replies)
              };
            }
            return c;
          });
        };
        return addReply(prevComments);
      });
    }
    setNewComment('');
  };

  return (
    <div className="mt-4">
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Add a comment..."
        />
        <button
          onClick={() => addComment(null)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2"
        >
          <PaperAirplaneIcon className="h-5 w-5" />
          <span>Comment</span>
        </button>
      </div>

      <div className="space-y-4">
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            onReply={addComment}
            level={0}
          />
        ))}
      </div>
    </div>
  );
}

CommentSection.propTypes = {
  postId: PropTypes.number.isRequired
};