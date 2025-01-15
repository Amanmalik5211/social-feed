import { useState } from 'react';
import PropTypes from 'prop-types';
import ShareDialog from './ShareDialog';
import CommentSection from './CommentSection';
import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

export default function Post({ post }) {
  const [liked, setLiked] = useState(post.liked);
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <div className="border rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-2xl font-bold mb-3 text-gray-800">{post.title}</h2>
      <p className="mb-6 text-gray-600 leading-relaxed">{post.body}</p>
      
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setLiked(!liked)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
            liked 
              ? 'bg-pink-100 text-pink-600' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {liked ? (
            <HeartSolidIcon className="h-5 w-5" />
          ) : (
            <HeartIcon className="h-5 w-5" />
          )}
          <span>{liked ? 'Liked' : 'Like'}</span>
        </button>
        
        <button
          onClick={() => setIsShareOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-200"
        >
          <ShareIcon className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>

      <CommentSection postId={post.id} />
      
      {isShareOpen && (
        <ShareDialog onClose={() => setIsShareOpen(false)} />
      )}
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired
  }).isRequired
};