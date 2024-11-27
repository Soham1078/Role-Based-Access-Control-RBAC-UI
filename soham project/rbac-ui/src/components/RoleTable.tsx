import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";
import axios from "axios";

interface Role {
  id: number;
  name: string;
  permissions: string[];
}

const RoleTable: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/roles");
      setRoles(response.data);
    } catch (error) {
      message.error("Failed to fetch roles");
    }
  };

  const handleAddRole = async (values: Role) => {
    try {
      await axios.post("http://localhost:5000/roles", values);
      fetchRoles();
      message.success("Role added successfully");
      setIsModalOpen(false);
    } catch (error) {
      message.error("Failed to add role");
    }
  };

  const columns = [
    { title: "Role Name", dataIndex: "name", key: "name" },
    {
      title: "Permissions",
      render: (text: string, record: Role) => record.permissions.join(", "),
    },
    {
      title: "Actions",
      render: (text: string, record: Role) => (
        <Button type="link" onClick={() => console.log("Edit role", record.id)}>
          Edit
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Add Role
      </Button>
      <Table dataSource={roles} columns={columns} rowKey="id" />

      <Modal
        title="Add Role"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleAddRole} layout="vertical">
          <Form.Item name="name" label="Role Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="permissions" label="Permissions">
            <Input placeholder="Comma-separated permissions (e.g., Read, Write)" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default RoleTable;
