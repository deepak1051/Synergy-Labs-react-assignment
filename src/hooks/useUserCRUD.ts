import { useState } from 'react';
import axios from 'axios';
import { User } from '../types';

export const useUserCRUD = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = async (newUser: Omit<User, 'id'>) => {
    setLoading(true);
    try {
      const response = await axios.post<User>(
        'https://jsonplaceholder.typicode.com/users',
        newUser
      );
      return response.data;
    } catch (err) {
      setError('Failed to create user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id: number, updatedUser: Partial<User>) => {
    setLoading(true);
    try {
      const response = await axios.put<User>(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        updatedUser
      );
      return response.data;
    } catch (err) {
      setError('Failed to update user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: number) => {
    setLoading(true);
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (err) {
      setError('Failed to delete user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createUser, updateUser, deleteUser, loading, error };
};
