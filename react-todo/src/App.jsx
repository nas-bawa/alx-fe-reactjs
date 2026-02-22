import TodoList from ".src/components/TodoList";  // ✅ import TodoList

function App() {
  return (
    <div>
      <h1>My React Todo App</h1>
      <TodoList />   {/* ✅ render TodoList */}
    </div>
  );
}

export default App;
