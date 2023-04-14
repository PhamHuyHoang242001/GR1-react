// import NewTable from "./component/NewTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./component/ToDoList";
import TodoDetail from "./component/TodoDetails";

import NewTable from "./component/NewTable";
function App() {
  return (
    <>
      {/* <NewTable /> */}
      <Router>
        <Routes>
          <Route path="/table" element={<NewTable />}></Route>
          <Route path="/todolist" element={<TodoList />}></Route>
          <Route path="/todo/:id" element={<TodoDetail />} />
          <Route path="/" element={<h1>hello</h1>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
