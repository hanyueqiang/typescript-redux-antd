import React from "react";
import { Button, Select } from "antd";

const { Option } = Select

const Index: React.FC = () => {
  return (
    <div>
      <Button type="primary">Antd 按钮</Button>
      <Select style={{width: 120}} value={1}>
        <Option value={1}>1234567</Option>
        <Option value={2}>的地方</Option>
        <Option value={3}>纷纷</Option>
      </Select>
    </div>
  );
};

export default Index;
