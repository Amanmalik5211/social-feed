import Posts from './components/Posts';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm mb-8">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-800">Social Feed</h1>
        </div>
      </header>
      <Posts />
    </div>
  );
}