import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/outline';

function ShareDialog({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
      
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Share this post</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        
        <p className="text-gray-600 mb-6">
          Share this post with your friends and followers!
        </p>

        
        <button
          onClick={onClose}
          className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
}

ShareDialog.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ShareDialog;