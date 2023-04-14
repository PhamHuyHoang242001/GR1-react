import React from "react";
import { Table } from "antd";
import columns from "../data/columns";
import genData from "../data/datas";

export default function NewTable() {
  return (
    <div>
      <Table columns={columns} dataSource={genData} />
    </div>
  );
}
