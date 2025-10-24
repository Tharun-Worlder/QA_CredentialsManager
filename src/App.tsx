import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ViewDataPage from './components/ViewDataPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'view'>('home');

  return (
    <div className="min-h-screen bg-black">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      {currentPage === 'home' ? <HomePage /> : <ViewDataPage />}
    </div>
  );
}

export default App;
