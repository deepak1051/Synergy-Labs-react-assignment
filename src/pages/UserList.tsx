import React from 'react';
import { Link } from 'react-router-dom';

import { User } from '../types';
import { useFetchUsers } from '../hooks/useFetchUsers';
import SkeletonLoader from '../components/Loader';

const UserList: React.FC = () => {
  const { users, loading, error, deleteUser } = useFetchUsers();

  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">User List</h1>
      <div className="flex justify-end mb-4">
        <Link
          to="/create"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Create New User
        </Link>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {loading ? (
          <SkeletonLoader />
        ) : (
          <ul>
            {users.map((user: User) => (
              <li
                key={user.id}
                className="border-b border-gray-200 p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-bold">{user.name}</h3>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                </div>
                <div className="space-x-2">
                  <Link
                    to={`/edit/${user.id}`}
                    className="bg-yellow-400 text-white py-1 px-3 rounded-lg hover:bg-yellow-500 transition"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserList;
