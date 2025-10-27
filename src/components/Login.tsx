import { useState } from 'react';

interface LoginProps {
  onAuth: () => void;
}

const UNIVERSAL_USERNAME = import.meta.env.VITE_UNIVERSAL_USERNAME;
const UNIVERSAL_PASSWORD = import.meta.env.VITE_UNIVERSAL_PASSWORD;

function Login({ onAuth }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (username === UNIVERSAL_USERNAME && password === UNIVERSAL_PASSWORD) {
      onAuth();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-2xl font-bold mb-6">Sign in</h1>

        <label className="block text-sm font-medium mb-2 text-gray-300">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white mb-4"
          placeholder="Enter username"
          autoFocus
        />

        <label className="block text-sm font-medium mb-2 text-gray-300">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white mb-6"
          placeholder="Enter password"
        />

        <button
          type="submit"
          className="w-full bg-white text-black font-semibold px-4 py-3 rounded-lg hover:bg-gray-200 transition-all"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
