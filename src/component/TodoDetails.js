import React from "react";
import { useParams } from "react-router-dom";
function TodoDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Todo Detail</h2>
      <p>ID: {id}</p>
    </div>
  );
}

export default TodoDetail;
