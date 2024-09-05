import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="bg-teal-400 flex justify-between p-4 text-white">
      <h2 className="text-xl font-bold italic">CRUD 🪶</h2>
      <div className="flex gap-3">
        <Link to="/" className="border p-2 rounded font-semibold">
          User List
        </Link>
        <Link to="/create" className="border p-2 rounded">
          Create User
        </Link>
      </div>
    </div>
  );
}
