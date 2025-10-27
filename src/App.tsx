import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ViewDataPage from './components/ViewDataPage';
import Login from './components/Login';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'view'>('home');
  const [isAuthed, setIsAuthed] = useState<boolean>(() => localStorage.getItem('isAuthed') === 'true');

  const handleAuth = () => {
    localStorage.setItem('isAuthed', 'true');
    setIsAuthed(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthed');
    setIsAuthed(false);
    setCurrentPage('home');
  };

  if (!isAuthed) {
    return <Login onAuth={handleAuth} />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} onLogout={handleLogout} />
      {currentPage === 'home' ? <HomePage /> : <ViewDataPage />}
    </div>
  );
}

export default App;
