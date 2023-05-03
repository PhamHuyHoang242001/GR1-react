import React from "react";
import { useParams } from "react-router-dom";
function TodoDetail() {
  const { prid } = useParams();
  return (
    <div>
      <h2>Todo Detail</h2>
      <p>ID: {prid}</p>
    </div>
  );
}

export default TodoDetail;
