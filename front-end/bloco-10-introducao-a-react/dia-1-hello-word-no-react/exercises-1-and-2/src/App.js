import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tasks = ['fazer exercícios', 'comer', 'colocar o lixo para fora', 'tomar banho']
  const jsxTasks = tasks.map((task) => <li>{task}</li>)
  return Task(jsxTasks)
}

export default App;
