import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Search, Video, Bell, User } from 'lucide-react';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 flex items-center justify-between px-4 h-14 border-b">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Menu size={24} />
        </button>
        <a href="/" className="flex items-center gap-1">
          <Video className="text-red-600" size={28} />
          <span className="text-xl font-semibold">YouTube</span>
        </a>
      </div>
      
      <form onSubmit={handleSearch} className="flex-1 max-w-2xl px-4">
        <div className="flex">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:border-blue-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="px-6 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100"
          >
            <Search size={20} />
          </button>
        </div>
      </form>

      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Video size={24} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell size={24} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <User size={24} />
        </button>
      </div>
    </header>
  );
}