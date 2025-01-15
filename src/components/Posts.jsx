import { useState } from 'react';
import Post from './Post';
import Loader from './Loader';
import { PlusIcon } from '@heroicons/react/24/outline';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddPosts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      
      const data = await response.json();
      const postsWithMetadata = data.map(post => ({
        ...post,
        liked: false
      }));
      
      setPosts(postsWithMetadata);
    } catch (err) {
      setError('Failed to load posts. Please try again.');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
    
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md p-4 shadow-sm">
        <button
          onClick={handleAddPosts}
          disabled={loading}
          className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <PlusIcon className="h-5 w-5" />
          <span>{loading ? 'Loading...' : 'Add Posts'}</span>
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">
          {error}
        </div>
      )}

      {loading && (
        <div className="flex justify-center my-8">
          <Loader />
        </div>
      )}


      <div className="space-y-6 mt-6">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>


      {!loading && !error && posts.length === 0 && (
        <div className="text-center text-gray-500 my-12">
          Click Add Posts to fetch posts
        </div>
      )}
    </div>
  );
}

export default Posts;