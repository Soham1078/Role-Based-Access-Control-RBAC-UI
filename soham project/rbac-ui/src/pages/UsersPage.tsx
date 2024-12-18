import React from "react";
import UserTable from "../components/UserTable";

const UsersPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserTable />
    </div>
  );
};

export default UsersPage;
