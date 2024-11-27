import React from "react";
import RoleTable from "../components/RoleTable";

const RolesPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Role Management</h1>
      <RoleTable />
    </div>
  );
};

export default RolesPage;
