import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

interface LoginProps {
  onAuth: () => void;
}

function Login({ onAuth }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onAuth();
    } catch (err: any) {
      alert('Login failed: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-2xl font-bold mb-6">Sign in</h1>

        <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white mb-4"
          placeholder="Enter email"
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
