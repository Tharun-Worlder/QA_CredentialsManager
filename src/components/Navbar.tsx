import { Home, Database } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'view';
  onPageChange: (page: 'home' | 'view') => void;
}

function Navbar({ currentPage, onPageChange }: NavbarProps) {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Database className="w-8 h-8 text-white" />
            <h1 className="text-xl font-bold text-white">Credentials Manager</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onPageChange('home')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${
                currentPage === 'home'
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </button>
            <button
              onClick={() => onPageChange('view')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${
                currentPage === 'view'
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Database className="w-4 h-4" />
              View Data
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
