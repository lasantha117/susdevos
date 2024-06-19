'use client';

import 'remixicon/fonts/remixicon.css'; // Ensure you import the Remix Icon CSS

interface User {
  name: string;
  email: string;
  role: string;
  dateAdded: string;
  lastActive: string;
  status: boolean;
}

interface UserManagementTableProps {
  title: string;
  users: User[];
}

const UserManagementTable: React.FC<UserManagementTableProps> = ({ title, users }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Name</th>
            <th className="py-2 px-4 border-b border-gray-200">Email</th>
            <th className="py-2 px-4 border-b border-gray-200">Role</th>
            <th className="py-2 px-4 border-b border-gray-200">Date added</th>
            <th className="py-2 px-4 border-b border-gray-200">Last active</th>
            <th className="py-2 px-4 border-b border-gray-200">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.role}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.dateAdded}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.lastActive}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <input type="checkbox" checked={user.status} readOnly />
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button>
                <i className="ri-delete-bin-line"></i> 
                </button>
                <span className="mx-2"></span>
                <button >
                  <i className="ri-pencil-line"></i>
                </button>
              </td>               
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagementTable;
