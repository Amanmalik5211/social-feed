import { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowUturnLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Comment({ comment, onReply, level = 0 }) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const handleReply = () => {
    if (!replyContent.trim()) return;
    onReply(comment.id, replyContent);
    setReplyContent('');
    setIsReplying(false);
  };

  const indentationClass = level > 5 ? 'ml-4' : `ml-${level * 4}`;

  return (
    <div className={`border-l-2 border-gray-200 ${indentationClass}`}>
      <div className="bg-gray-50 rounded-lg p-4 mb-2">
        <p className="text-gray-700 mb-3">{comment.content}</p>
        
        <button
          onClick={() => setIsReplying(!isReplying)}
          className="flex items-center gap-1 text-blue-500 text-sm hover:text-blue-600 transition-colors duration-200"
        >
          <ArrowUturnLeftIcon className="h-4 w-4" />
          <span>Reply</span>
        </button>

        {isReplying && (
          <div className="mt-3 space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                className="flex-1 border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Write a reply..."
                autoFocus
              />
              <button
                onClick={handleReply}
                className="px-3 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Reply
              </button>
              <button
                onClick={() => setIsReplying(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className="space-y-2">
          {comment.replies.map(reply => (
            <Comment
              key={reply.id}
              comment={reply}
              onReply={onReply}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    replies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        replies: PropTypes.array
      })
    )
  }).isRequired,
  onReply: PropTypes.func.isRequired,
  level: PropTypes.number
};

Comment.defaultProps = {
  level: 0
};