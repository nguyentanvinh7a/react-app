import './App.css';

import Todo from './components/Todo';

function App() {
  return (
    <>
      <h1>My Todos</h1>
      <Todo text='Leart React' />
      <Todo text='Master React' />
      <Todo text='Explore the full React course' />
    </>
  );
}

export default App;
