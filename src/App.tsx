import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 sm:w-[30rem] flex flex-col items-center transition-transform hover:scale-105">
        <div className="relative w-28 h-28 mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            ref={fileInputRef}
          />
          <div
            onClick={handleProfileImageClick}
            className="w-full h-full flex justify-center items-center bg-gray-300 rounded-full overflow-hidden cursor-pointer border-4 border-gray-100 shadow-md hover:border-blue-500 transition"
          >
            {imageUrl ? (
              <img src={imageUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500 text-2xl">+</span>
            )}
          </div>
        </div>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition"
        />

        <textarea
          rows={3}
          placeholder="Write a short bio about yourself..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition"
        ></textarea>

        <div className="mt-6 w-full sm:w-80">
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
