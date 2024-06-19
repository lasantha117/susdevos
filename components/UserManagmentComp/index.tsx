'use client';

import React, { useState } from 'react';
import AddNewUserForm from '@/components/AddNewUser'; // Make sure this component exists
import { Button } from 'react-aria-components';
import UserManagementTable from '@/components/UserManagementTable';

// Define the User type
interface User {
  name: string;
  email: string;
  role: string;
  dateAdded: string;
  lastActive: string;
  status: boolean;
}

const UserManagement: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([
    { name: 'Olivia Rhye', email: 'olivia@untitledui.com', role: 'Manager', dateAdded: 'Feb 22, 2022', lastActive: 'Mar 14, 2022', status: true },
    { name: 'Phoenix Baker', email: 'phoenix@untitledui.com', role: 'Admin', dateAdded: 'Feb 22, 2022', lastActive: 'Mar 12, 2022', status: false },
    { name: 'Charlie Miller', email: 'charlie@untitledui.com', role: 'Manager', dateAdded: 'Mar 15, 2022', lastActive: 'Jun 12, 2024', status: true },
    { name: 'Aurora Jones', email: 'aurora@untitledui.com', role: 'Manager', dateAdded: 'May 01, 2023', lastActive: 'Jun 10, 2024', status: true }
  ]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (user: User) => {
    setUsers([...users, user]);
    closeModal();
  };

  //filter according to role
  const adminUsers = users.filter(user => user.role === 'Admin');
  const managerUsers = users.filter(user => user.role === 'Manager');

  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-semibold">User Management</h1>
          <p className="text-gray-600">Manage your team members and their accounts here.</p>
        </div>
        <Button
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
          onPress={openModal}
          style={{ backgroundColor: '#7F56D9' }}
        >
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add new
          </span>
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4 divide-y divide-gray-200">
        <div className="col-span-1 pr-4">
          <h2 className="text-lg font-semibold mb-2">Admin users</h2>
          <p className="text-gray-600">Admins can add and remove users and manage organization-level settings.</p>
        </div>
        <div className="col-span-3 pt-4">
          <UserManagementTable title="Admin Users" users={adminUsers} />
        </div>
        <div className="col-span-1 pr-4 pt-4">
          <h2 className="text-lg font-semibold mb-2">Managers</h2>
          <p className="text-gray-600">Account users can assess and review risks, questionnaires, data leaks, and identify breaches.</p>
        </div>
        <div className="col-span-3 pt-4">
          <UserManagementTable title="Managers" users={managerUsers} />
        </div>
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
            <AddNewUserForm onSubmit={handleSubmit} onCancel={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
